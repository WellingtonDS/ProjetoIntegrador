const disciplinasTab = document.getElementById('disciplinas-tab');
const conteudoDisciplinas = document.getElementById('conteudoDisciplinas');
const disciplinaEditarLabel = document.getElementById('disciplinaEditarLabel');
const formDisciplinaEditar = document.getElementById('formDisciplinaEditar');
const inputsFormDisciplinasEditar = document.querySelectorAll('.input-disciplina-editar')
const formDisciplinasBuscar = document.getElementById('formDisciplinasBuscar');
const inputBuscarDisciplina = document.getElementById('inputBuscarDisciplina');
const alertErroDisciplinas = document.getElementById('alertErroDisciplinas');
const fecharAlertErroDisciplinas = document.getElementById('fecharAlertErroDisciplinas');
const alertWarningDisciplinas = document.getElementById('alertWarningDisciplinas');
const fecharAlertWarningDisciplinas = document.getElementById('fecharAlertWarningDisciplinas');
// const conteudoDisciplinas = document.getElementById('conteudoDisciplinas');

var disciplinas;
var disciplinasFiltradas;
var discBusca;
var reqDisciplinas = false;

// inserindo os dados no container
const disciplinasIndex = () => {
  let dataDisciplinas = `<table class="table-responsive" id="tarefas"><thead><tr><th>Nome</th><th>Descrição</th><th class="center">Ações</th></tr></thead><tbody id="dadosDisciplinas">`

  disciplinas.forEach(disciplina => {

    dataDisciplinas += `
    <tr id="${disciplina.id}" class="trTbody">
      <td class="">${disciplina.nome}</td>
      <td class="">${disciplina.descricao.substring(0, 30)}...</td>
      <td class="">
        <a class="botao botao-detalhes" href="#">Detalhes</a>
      </td>  
    </tr>
    `
  })

  conteudoDisciplinas.innerHTML = dataDisciplinas + `</tbody></table>`;

}

const disciplinaDetalhes = async (disciplinaId) => {
  let tableDisciplinaContent = document.getElementById('conteudoDisciplinas');
  let disciplina;
  let professor;
  let disciplinaContent = '';

  await fetch(`/admin/disciplinas/${disciplinaId}/detalhes`)
    .then(response => response.json())
    .then(responseJson => {
      disciplina = responseJson;
    });

  professores = disciplina.professores;
  console.log(professores)
  
  // gerando string que será inserinda no html
  disciplinaContent = `
  <form id="formDisciplinaDeletar" action="/admin/disciplinas/${disciplina.id}/deletar?_method=DELETE" method="POST">
    <table class="table-responsive">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Professor</th>
          <th class="center">Ações</th>
        </tr>
      </thead>
      <tbody id="dadosDisciplinas">
        
          <tr id="${disciplina.id}" class="trTbody">
            <td>${disciplina.id}</td>
            <td>${disciplina.nome}</td>
            <td>${disciplina.descricao}</td>
            <td>${professores[0].nome} ${professores[0].sobrenome}</td>
            <td>
              <a id="btnVoltar" class="botao botao-detalhes" href="#">
                Voltar
              </a>&nbsp;
              <a class="botao botao-editar" href="#" data-toggle="modal" data-target="#disciplinaEditar">
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
  tableDisciplinaContent.innerHTML = disciplinaContent;
  disciplinaEditarLabel.innerText = `Editar Disciplina #${disciplina.id}`;
  formDisciplinaEditar.setAttribute('action', `/admin/disciplinas/${disciplina.id}/editar?_method=PUT`);
  inputsFormDisciplinasEditar[0].value = disciplina.nome;
  inputsFormDisciplinasEditar[1].value = disciplina.descricao;
  inputsFormDisciplinasEditar[2].value = professores[0].id;


}

const confirmDisciplinasExcluir = (id) => {
  if(window.confirm(`Deseja exluir essa Disciplina (${id})?`)){
    return true;
  }else{
    return false;
  }
}

const disciplinasMetodos = (tag) => {
  let tagContent = (tag.innerText).toLowerCase().trim()
  let id = tag.parentElement.parentElement.id;
  let formDisciplinaDeletar = document.getElementById('formDisciplinaDeletar')

  switch(tagContent){
    case 'detalhes':
      inputBuscarDisciplina.value = "";
      disciplinaDetalhes(id)
      break;

    case 'voltar':
      disciplinasIndex();
      break;

    case 'editar':
      break;

    case 'excluir':
      
      if(!confirmDisciplinasExcluir(id)){
        formDisciplinaDeletar.onsubmit = (event) => {
          event.preventDefault();
        }
      }
      
      break

    default:
      break;
  }
}

// inicio area de busca
// insere os dados filtrados vindos do backend na aba disciplinas
const disciplinasFiltradasMostrar = () => {

  if(disciplinasFiltradas.length == 0 || disciplinasFiltradas == undefined){
    alertWarningDisciplinas.style.display = 'flex';
  } else {
    alertWarningDisciplinas.style.display = "";

    let dataTableDisciplinasFitradas = `<table class="table-responsive" id="tarefas"><thead><tr><th>Nome</th><th>Descrição</th><th class="center">Ações</th></tr></thead><tbody id="dadosDisciplinas">`
    disciplinasFiltradas.forEach(disciplinaFiltrada => {
    
      dataTableDisciplinasFitradas += `
      <tr id="${disciplinaFiltrada.id}" class="trTbody">
        <td class="">${disciplinaFiltrada.nome}</td>
        <td class="">${disciplinaFiltrada.descricao.substring(0, 30)}...</td>
        <td class="">
          <a class="botao botao-detalhes" href="#">Detalhes</a>
        </td>  
      </tr>
      ` 
      conteudoDisciplinas.innerHTML = dataTableDisciplinasFitradas + `</tbody></table>`;
    })
  }
}

const verificarErroDisciplina = (discBusca) => {
  let erro = true;
  console.log(discBusca)
  if(discBusca == undefined || discBusca == ""){
    alertErroDisciplinas.style.display = 'flex';
  } else {
    alertErroDisciplinas.style.display = 'none';
    erro = false;
  }

  return erro;
}

formDisciplinasBuscar.onsubmit = async (event) => {
  event.preventDefault()
  if(verificarErroDisciplina(discBusca) || discBusca == ""){
    return
  } else {
    console.log("Formulario submetido")
    await fetch(`/admin/disciplinas/buscar?disciplina=${ discBusca }`)
      .then(resultado => resultado.json())
      .then(resultadoJson => {
        console.log(resultadoJson)
        disciplinasFiltradas = resultadoJson;
      })
  }

  disciplinasFiltradasMostrar();

}

inputBuscarDisciplina.addEventListener('click', event => {
  discBusca = inputBuscarDisciplina.value
});

inputBuscarDisciplina.addEventListener('keyup', event => {
  discBusca = inputBuscarDisciplina.value;
});

formDisciplinasBuscar.addEventListener('change', event => {
  discBusca = inputBuscarDisciplina.value;
})

disciplinasTab.onclick = async () => {

  inputBuscarDisciplina.value = "";

  if(!reqDisciplinas){
    await fetch("/admin/disciplinas")
    .then(resultado => resultado.json())
    .then(resultadoJson => {
      disciplinas = resultadoJson;
      reqDisciplinas = true;
    })
    .catch(err => console.log(err))
  }

  disciplinasIndex();

}

fecharAlertErroDisciplinas.onclick = () => {
  alertErroDisciplinas.style.display = "";
}

fecharAlertWarningDisciplinas.onclick = () => {
  alertWarningDisciplinas.style.display = ""
}
// fim da area de busca

// fazendo requisição
conteudoDisciplinas.addEventListener('click', (event) => {
  let tag = event.target;
  disciplinasMetodos(tag)
})