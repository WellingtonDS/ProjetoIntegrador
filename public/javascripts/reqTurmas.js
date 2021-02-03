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
  let turma = null;
  let turmaContent = '';
  
  await fetch(`/admin/turmas/${id}/detalhes`)
    .then(response => response.json())
    .then(responseJson => {
      turma = responseJson;
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
  `
  tableTurmaContent.innerHTML = turmaContent;
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

  turmasIndex();
}

conteudoTurmas.addEventListener('click', (event) => {
  let tag = event.target;
  turmasMetodos(tag)
})
