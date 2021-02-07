const turmasTab= document.getElementById('turmas-tab');
const conteudoTurmas = document.getElementById('conteudoTurmas');
const btnVoltar = document.getElementById('btnVoltar');
const formTurmaEditar = document.getElementById('formTurmaEditar');
const inputsFormTurmaEditar = document.querySelectorAll('.input-turma-editar')
const turmaEditarLabel = document.getElementById('turmaEditarLabel');
const FormTurmasBuscar = document.getElementById('FormTurmasBuscar');
const inputsRadio = document.querySelectorAll('.inputRadio');
const InputBusca = document.querySelector('.input-buscar');
const FormContent = document.getElementById('form-content');
const inputBuscarTurma = document.getElementById('inputBuscarTurma');
const alertErro = document.getElementById('alertErro');
const fecharAlert = document.getElementById('fecharAlertErro');
const alertWarning = document.getElementById('alertWarning');
const fecharAlertWarning = document.getElementById('fecharAlertWarning');

var turmas;
var turmasFiltradas;
var reqTurma = false;
var filtroBusca;
var valorBusca;

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
  inputsRadio.forEach(input => {
    input.checked = false;
  })
  let turma;
  let listaProfessores;
  let listaAlunos;
  let professores = `<ul class="list-group">`;
  let alunos = `<ul class="list-group">`;
  let professoresDisciplinas;
  
  let turmaContent = '';
  
  await fetch(`/admin/turmas/${id}/detalhes`)
    .then(response => response.json())
    .then(responseJson => {
      turma = responseJson.turma;
      professoresDisciplinas = responseJson.professoresDisciplinas;
    })

  listaProfessores = turma.professores_disciplinas;
  listaProfessores.forEach(item => {
    professores += `<li class="list-group-item">${item.professor.nome} ${item.professor.sobrenome}</li>`
  })

  listaAlunos = turma.alunos;
  listaAlunos.forEach(aluno => {
    alunos += `<li class="list-group-item">${aluno.nome} ${aluno.sobrenome}</li>`
  })
 
  let opcoesProfessoresDisciplinas = "";
  professoresDisciplinas.forEach(profDisciplina => {
    opcoesProfessoresDisciplinas += `<option value="${profDisciplina.id}">${profDisciplina.professor.nome} ${profDisciplina.professor.sobrenome}/${profDisciplina.disciplina.nome}</option>`
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
          <th>Ativa</th>
          <th class="center">Ações</th>
        </tr>
      </thead>
      <tbody id="dadosTurmas">
        
          <tr id="${turma.id}" class="trTbody">
            <td>${turma.id}</td>
            <td>${turma.serie}</td>
            <td>${turma.nivel}</td>
            <td>${turma.turno}</td>
            <td>${turma.situacao == "A" ? "SIM" : "NÃO"}</td>
            <td>
              <a id="btnVoltar" class="botao botao-detalhes" href="#">
                Voltar
              </a>&nbsp;
              <a class="botao botao-editar" href="#" data-toggle="modal" data-target="#turmaEditar">
                Editar
              </a>&nbsp;
              <a class="botao botao-enviar" href="#" data-toggle="modal" data-target="#turmaAddprofessor">
                + Professor
              </a>&nbsp;
              <button type="submit" class="botao botao-excluir">
                Excluir
              </button>
            </td>
          </tr>
        
      </tbody>
    </table>
  </form>
  <div class="modal fade" id="turmaAddprofessor" tabindex="-1" aria-labelledby="turmaAddprofessorLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="turmaAddprofessorLabel">Adicionar um(a) Professor(a) a essa Turma</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="formTurmaAddProfessor" action="/admin/turmas/${turma.id}/add_professor" method="POST">
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Professor/Disciplina</label>
            <select class="form-control input-turma-add-professor" id="professor_disciplina" name="professor_disciplina_id" style="margin: 0;">
              ${opcoesProfessoresDisciplinas}
            </select>
          </div>
          <div id="btn-modal" class="btn-modal-enviar">
            <p id="msgErroAddProfessor" class="msgErroModal">Erro ao tentar enviar as informações</p>
            <p id="msgSucessoAddProfessor" class="msgSucessoModal">
              Professor criada com sucesso
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
              </svg>
            </p>
            <button id="btnTurmaAddProfessorEnviar" type="submit" class="btn btn-success" >
              Enviar
            </button>
          </div>    
        </form>
      </div>
    </div>
  </div>
</div>
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

  inputsRadio.forEach(input => {
    input.checked = false;
  })

  inputBuscarTurma.value = "";

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

// insere os dados filtrados vindos do backend na aba turmas
const turmasFiltradasMostrar = () => {

  if(turmasFiltradas.length == 0 || turmasFiltradas == undefined){
    alertWarning.style.display = 'flex';
  } else {
    let dataTableTurmasFitradas = `<table class="table-responsive"><thead><tr><th>Série</th><th>Nível</th><th>Turno</th><th class="center">Ações</th></tr></thead><tbody id="dadosTurmas">`;
    turmasFiltradas.forEach(turmaFiltrada => {
    
      dataTableTurmasFitradas += `
      <tr id="${turmaFiltrada.id}" class="trTbody">
        <td>${turmaFiltrada.serie}</td>
        <td>${turmaFiltrada.nivel}</td>
        <td>${turmaFiltrada.turno}</td>
        <td class="">
          <a class="botao botao-detalhes" href="#">
            Detalhes
          </a>
        </td>
      </tr>
      ` 
      conteudoTurmas.innerHTML = dataTableTurmasFitradas + `</tbody></table>`;
    })
  }  

}

// inicio area de busca
const verificarErro = (filtroBusca, valor) => {
  let erro = true;
  console.log(valor)
  if(filtroBusca == undefined || valor == undefined || valor == ""){
    alertErro.style.display = 'flex';
  } else {
    alertErro.style.display = 'none';
    erro = false;
  }

  return erro;
}

FormContent.addEventListener('click', event => {
  let content = event.target.value
  if(content == "serie" || content == "nivel" || content == "turno"){
    filtroBusca = content;
  }
})

inputBuscarTurma.addEventListener('keyup', () => {
  valorBusca = inputBuscarTurma.value;
})

inputBuscarTurma.addEventListener('change', () => {
  valorBusca = inputBuscarTurma.value;
})

FormTurmasBuscar.onsubmit = async (event) => {
  event.preventDefault()
  if(verificarErro(filtroBusca, valorBusca) || valorBusca == ""){
    return
  } else {
    console.log("Formulario submetido")
    await fetch(`/admin/turmas/buscar?filtro=${ filtroBusca }&valor=${ valorBusca }`)
      .then(resultado => resultado.json())
      .then(resultadoJson => {
        console.log(resultadoJson)
        turmasFiltradas = resultadoJson;
      })
  }

  turmasFiltradasMostrar();

}

fecharAlert.onclick = () => {
  alertErro.style.display = "";
}

fecharAlertWarning.onclick = () => {
  alertWarning.style.display = ""
}
// fim da area de busca

conteudoTurmas.addEventListener('click', (event) => {
  let tag = event.target;
  turmasMetodos(tag)
})


