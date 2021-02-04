const turmasTab= document.getElementById('turmas-tab');
const conteudoTurmas = document.getElementById('conteudoTurmas');
const btnVoltar = document.getElementById('btnVoltar');
const formTurmaEditar = document.getElementById('formTurmaEditar');
const inputsFormTurmaEditar = document.querySelectorAll('.input-turma-editar')
const turmaEditarLabel = document.getElementById('turmaEditarLabel');
var turmas;
var reqTurma = false;

const turmasIndex = () => {
  let dataTable = `<table class="table-responsive"><thead><tr><th>Série</th><th>Nível</th><th>Turno</th><th class="center">Ações</th></tr></thead><tbody id="dadosTurmas">`;

  turmas.forEach(turma => {
    dataTable += `
    <tr id="${turma.id}" class="trTbody">
      <td>${turma.serie}</td>
      <td>${turma.nivel}</td>
      <td>${turma.turno}</td>
      <td class="">
        <a class="botao botao-detalhes" href="#">
          Detalhes
        </a>
      </td>
    </tr>
    ` 
  })
  
  conteudoTurmas.innerHTML = dataTable + `</tbody></table>`;
}

const turmasDetalhes = async (id) => {
  let tableTurmaContent = document.getElementById('conteudoTurmas');
  
  let turma;
  let listaProfessores;
  let listaAlunos;
  let professores = `<ul class="list-group">`;
  let alunos = `<ul class="list-group">`
  
  let turmaContent = '';
  
  await fetch(`/admin/turmas/${id}/detalhes`)
    .then(response => response.json())
    .then(responseJson => {
      turma = responseJson
    })


  listaProfessores = turma.professores_disciplinas;
  listaProfessores.forEach(item => {
    professores += `<li class="list-group-item">${item.professor.nome} ${item.professor.sobrenome}</li>`
  })

  listaAlunos = turma.alunos;
  listaAlunos.forEach(aluno => {
    alunos += `<li class="list-group-item">${aluno.nome} ${aluno.sobrenome}</li>`
  })
 
  turmaContent = `
  <form id="formTurmaDeletar" action="/admin/turmas/${id}/deletar?_method=DELETE" method="POST">
    <table class="table-responsive">
      <thead>
        <tr>
          <th>Id</th>
          <th>Série</th>
          <th>Nível</th>
          <th>Turno</th>
          <th class="center">Ações</th>
        </tr>
      </thead>
      <tbody id="dadosTurmas">
        
          <tr id="${turma.id}" class="trTbody">
            <td>${turma.id}</td>
            <td>${turma.serie}</td>
            <td>${turma.nivel}</td>
            <td>${turma.turno}</td>
            <td>
              <a id="btnVoltar" class="botao botao-detalhes" href="#">
                Voltar
              </a>&nbsp;
              <a class="botao botao-editar" href="#" data-toggle="modal" data-target="#turmaEditar">
                Editar
              </a>&nbsp;
              <button type="submit" class="botao botao-excluir">
                Excluir
              </button>
            </td>
          </tr>
        
      </tbody>
    </table>
  </form>
  <p class="mt-3">
    <a class="btn btn-success btn-sm" data-toggle="collapse" href="#collapseProfessores" role="button" aria-expanded="false" aria-controls="collapseProfessores">
      Professores <span class="badge badge-light badge-pill">${listaProfessores.length}</span>
    </a>
    <a class="btn btn-info btn-sm" data-toggle="collapse" href="#collapseAlunos" role="button" aria-expanded="false" aria-controls="collapseAlunos">
      Alunos <span <span class="badge badge-light badge-pill">${listaAlunos.length}</span>
    </a>
  </p>
  <div class="collapse mb-2" id="collapseProfessores">
    <div id="professoresContainer" class="card card-body"></div>
  </div>
  <div class="collapse" id="collapseAlunos">
    <div id="alunosContainer" class="card card-body"></div>
  </div>
  `
  
  tableTurmaContent.innerHTML = turmaContent;

  const professoresContainer = document.getElementById('professoresContainer');
  professoresContainer.innerHTML = professores + `</ul>`
  const alunosContainer = document.getElementById('alunosContainer')
  alunosContainer.innerHTML = alunos + `</ul>`

  turmaEditarLabel.innerText = `Editar Turma #${turma.id}`
  formTurmaEditar.setAttribute('action', `/admin/turmas/${turma.id}/editar?_method=PUT`)
  inputsFormTurmaEditar[0].value = turma.serie;
  inputsFormTurmaEditar[1].value = turma.nivel;
  inputsFormTurmaEditar[2].value = turma.turno;
}

const confirmTurmasExcluir = (id) => {
  if(window.confirm(`Deseja exluir essa Turma (${id})?`)){
    return true;
  }else{
    return false;
  }
}

const turmasMetodos = (tag) => {
  let tagContent = (tag.innerText).toLowerCase().trim()
  let id = tag.parentElement.parentElement.id;
  let formTurmaDeletar = document.getElementById('formTurmaDeletar')
  switch(tagContent){
    case 'detalhes':
      turmasDetalhes(id);
      break;
    case 'voltar':
      turmasIndex();
      break;
    case 'editar':
      break;
    case 'excluir':
      
      if(!confirmTurmasExcluir(id)){
        formTurmaDeletar.onsubmit = (event) => {
          event.preventDefault();
        }
      }
      
      break

    default:
      break;
  }
}

turmasTab.onclick = async () => {

  if(!reqTurma){
    await fetch("/admin/turmas")
    .then(data => data.json())
    .then(dataDecode => {
      turmas = dataDecode;
      reqTurma = true;
    })
    .catch(err => console.log(err))
  }

  console.log(turmas)
  turmasIndex();
}

conteudoTurmas.addEventListener('click', (event) => {
  let tag = event.target;
  turmasMetodos(tag)
})
