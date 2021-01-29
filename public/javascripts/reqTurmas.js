const turmasTab= document.getElementById('turmas-tab');
const conteudoTurmas = document.getElementById('conteudoTurmas');
const btnVoltar = document.getElementById('btnVoltar');
const formTurmaEditar = document.getElementById('formTurmaEditar');
const inputsFormTurmaEditar = document.querySelectorAll('.input-turma-editar')
const turmaEditarLabel = document.getElementById('turmaEditarLabel');
var turmas;
var requisicaoFeita = false;

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
  let tableContent = document.getElementById('conteudoTurmas');
  let turma = null;
  let turmaContent = '';
  await fetch(`/admin/turmas/${id}/detalhes`)
    .then(response => response.json())
    .then(responseJson => {
      turma = responseJson;
    })
  turmaContent = `
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
          <a class="botao botao-exluir" href="#">
            Excluir
          </a>
        </td>
      </tr>
      </tbody>
    </table>
    `
    tableContent.innerHTML = turmaContent;
    turmaEditarLabel.innerText = `Editar Turma #${turma.id}`
    formTurmaEditar.setAttribute('action', `/admin/turmas/${turma.id}/editar?_method=PUT`)
    inputsFormTurmaEditar[0].value = turma.serie;
    inputsFormTurmaEditar[1].value = turma.nivel;
    inputsFormTurmaEditar[2].value = turma.turno;
}

const turmasMetodos = (tag) => {
  let tagContent = (tag.innerText).toLowerCase().trim()

  switch(tagContent){
    case 'detalhes':
      let id = tag.parentElement.parentElement.id;
      turmasDetalhes(id);
      break;
    case 'voltar':
      turmasIndex();
      break;
    case 'editar':
      break;
    case 'excluir':
      break
    default:
      break;
  }
}

turmasTab.onclick = async () => {

  if(!requisicaoFeita){
    await fetch("/admin/turmas")
    .then(data => data.json())
    .then(dataDecode => {
      turmas = dataDecode;
      requisicaoFeita = true;
    })
    .catch(err => console.log(err))
  }

  turmasIndex();
}

conteudoTurmas.addEventListener('click', (event) => {
  let tag = event.target;
  turmasMetodos(tag)
})
