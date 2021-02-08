const professoresTab = document.getElementById('professores-tab');
const conteudoProfessores = document.getElementById('conteudoProfessores');
const professorEditarLabel = document.getElementById('professorEditarLabel');
const formProfessorEditar = document.getElementById('formProfessorEditar');
const inputsFormprofessoresEditar = document.querySelectorAll('.input-professor-editar')
const formProfessoresBuscar = document.getElementById('formProfessoresBuscar');
const inputBuscarProfessor = document.getElementById('inputBuscarProfessor');
const alertErroProfessores = document.getElementById('alertErroProfessores');
const fecharAlertErroProfessores = document.getElementById('fecharAlertErroProfessores');
const alertWarningProfessores = document.getElementById('alertWarningProfessores');
const fecharAlertWarningProfessores = document.getElementById('fecharAlertWarningProfessores');

var professores;
var professoresFiltrados;
var profBusca;
var reqProfessores = false;

// inserindo os dados no container
const professoresIndex = () => {
  let dataProfessores = `<table class="table-responsive" id=""><thead><tr><th>Nome</th><th>Telefone</th><th>Usuario Id</th><th class="center">Ações</th></tr></thead><tbody id="dadosProfessores">`

  professores.forEach(professor => {

    dataProfessores += `
    <tr id="${professor.id}" class="trTbody">
      <td class="">${professor.nome} ${professor.sobrenome}</td>
      <td class="">${professor.telefone}</td>
      <td class="">${professor.usuario_id}</td>
      <td class="">
        <a class="botao botao-detalhes" href="#">Detalhes</a>
      </td>  
    </tr>
    `
  })

  conteudoProfessores.innerHTML = dataProfessores + `</tbody></table>`;

}

const professorDetalhes = async (professorId) => {
  let tableProfessorContent = document.getElementById('conteudoProfessores');
  let professores = null;
  let turmas;
  let strTurmas = `<ul class="list-group">`;
  let professorContent = '';

  await fetch(`/admin/professores/${professorId}/detalhes`)
    .then(response => response.json())
    .then(responseJson => {
      professor = responseJson.professor;
      turmas = responseJson.turmas;
    })

    turmas.forEach(turma => {
      strTurmas += `<li class="list-group-item">${turma.turma.serie} - Ensino ${turma.turma.nivel}</li>`
    })
  
  let disciplina = professor.disciplinas[0].nome

  // gerando string que será inserinda no html
  professorContent = `
  <form id="formProfessorDeletar" action="/admin/professores/${professor.id}/deletar?_method=DELETE" method="POST">
    <table class="table-responsive">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Telefone</th>
          <th>E-mail</th>
          <th>Disciplina</th>
          <th class="center">Ações</th>
        </tr>
      </thead>
      <tbody id="dadosProfessor">

          <tr id="${professor.id}" class="trTbody">
            <td>${professor.id}</td>
            <td>${professor.nome} ${professor.sobrenome}</td>
            <td>${professor.telefone}</td>
            <td>${professor.usuario.email}</td>
            <td>${disciplina} #${professor.disciplinas[0].id}</td>
            <td>
              <a id="btnVoltar" class="botao botao-detalhes" href="#">
                Voltar
              </a>&nbsp;
              <a class="botao botao-editar" href="#" data-toggle="modal" data-target="#professorEditar">
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
    <a class="btn btn-success btn-sm" data-toggle="collapse" href="#collapseTurmas" role="button" aria-expanded="false" aria-controls="collapseTurmas">
      Turmas <span class="badge badge-light badge-pill">${turmas.length}</span>
    </a>
  </p>
  <div class="collapse mb-2" id="collapseTurmas">
    <div id="professoresTurmasContainer" class="card card-body"></div>
  </div>
  `
  tableProfessorContent.innerHTML = professorContent;
  const professoresTurmasContainer = document.getElementById('professoresTurmasContainer');
  professoresTurmasContainer.innerHTML = strTurmas + `</ul>`
  professorEditarLabel.innerText = `Editar Professor(a) #${professor.id}`;
  formProfessorEditar.setAttribute('action', `/admin/professores/${professor.id}/editar?_method=PUT`)
  inputsFormprofessoresEditar[0].value = professor.nome;
  inputsFormprofessoresEditar[1].value = professor.sobrenome;
  inputsFormprofessoresEditar[2].value = professor.telefone;

}

const confirmProfessoresExcluir = (id) => {
  if(window.confirm(`Deseja exluir essa professor (${id})?`)){
    return true;
  }else{
    return false;
  }
}

const professoresMetodos = (tag) => {
  let tagContent = (tag.innerText).toLowerCase().trim()
  let id = tag.parentElement.parentElement.id;
  let formProfessorDeletar = document.getElementById('formProfessorDeletar')
  
  switch(tagContent){
    case 'detalhes':
      inputBuscarProfessor.value = "";
      professorDetalhes(id)
      break;

    case 'voltar':
      professoresIndex();
      break;

    case 'editar':
      break;

    case 'excluir':
      
      if(!confirmProfessoresExcluir(id)){
        formProfessorDeletar.onsubmit = (event) => {
          event.preventDefault();

        }
      }
      
      break

    default:

      break;
  }
}

// inicio da area de busca
const professoresFiltradosMostrar = () => {

  console.log(profBusca)

  if(professoresFiltrados.length == 0 || professoresFiltrados == undefined){
    alertWarningProfessores.style.display = 'flex';
  } else {
    alertWarningProfessores.style.display = "";

    let dataTableProfessoresFiltrados = `<table class="table-responsive" id=""><thead><tr><th>Nome</th><th>Telefone</th><th>Usuario Id</th><th class="center">Ações</th></tr></thead><tbody id="dadosProfessores">`
    professoresFiltrados.forEach(professorFiltrado => {
    
      dataTableProfessoresFiltrados += `
      <tr id="${professorFiltrado.id}" class="trTbody">
        <td class="">${professorFiltrado.nome} ${professorFiltrado.sobrenome}</td>
        <td class="">${professorFiltrado.telefone}</td>
        <td class="">${professorFiltrado.usuario_id}</td>
        <td class="">
          <a class="botao botao-detalhes" href="#">Detalhes</a>
        </td>  
      </tr>
      ` 
      conteudoProfessores.innerHTML = dataTableProfessoresFiltrados + `</tbody></table>`;
    })
  }
}

const verificarErroProfessor = (profBusca) => {
  let erro = true;
  console.log(profBusca)
  if(profBusca == undefined || profBusca == ""){
    alertErroProfessores.style.display = 'flex';
  } else {
    alertErroProfessores.style.display = 'none';
    erro = false;
  }

  return erro;
}

formProfessoresBuscar.onsubmit = async (event) => {
  event.preventDefault()
  if(verificarErroProfessor(profBusca) || profBusca == ""){
    return
  } else {
    console.log("Formulario submetido")
    await fetch(`/admin/professores/buscar?professor=${ profBusca }`)
      .then(resultado => resultado.json())
      .then(resultadoJson => {
        console.log(resultadoJson)
        professoresFiltrados = resultadoJson;
      })
  }

  professoresFiltradosMostrar();

}

inputBuscarProfessor.addEventListener('click', event => {
  profBusca = inputBuscarProfessor.value
});

inputBuscarProfessor.addEventListener('keyup', event => {
  profBusca = inputBuscarProfessor.value;
});

formProfessoresBuscar.addEventListener('change', event => {
  profBusca = inputBuscarProfessor.value;
})

fecharAlertErroProfessores.onclick = () => {
  alertErroProfessores.style.display = "";
}

fecharAlertWarningProfessores.onclick = () => {
  alertWarningProfessores.style.display = ""
}
// fim da area de busca

// fazendo requisição
professoresTab.onclick = async () => {

  inputBuscarProfessor.value = "";

  await fetch("/admin/professores")
  .then(resultado => resultado.json())
  .then(resultadoJson => {
    professores = resultadoJson;
  })
  .catch(err => console.log(err))

  professoresIndex();

}

conteudoProfessores.addEventListener('click', (event) => {
  let tag = event.target;

  professoresMetodos(tag)
})