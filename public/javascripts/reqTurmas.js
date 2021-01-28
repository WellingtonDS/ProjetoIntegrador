const turmasTab= document.getElementById('turmas-tab');
const conteudoTurmas = document.getElementById('conteudoTurmas');
var turmas;
var requisicaoFeita = false;

const turmasIndex = (tag) => {
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
  
  tag.innerHTML = dataTable + `</tbody></table>`;
}

const turmasDetalhes = async (id) => {
  let tableContent = document.getElementById('conteudoTurmas');
  let turma = null;
  let turmaContent = '';
  await fetch(`/admin/turmas/${id}/detalhes`)
    .then(response => response.json())
    .then(responseJson => {
      turma = responseJson;
      console.log(turma)
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
        <td class="">
          <a class="botao botao-editar" href="#">
            Editar
          </a>
          <a class="botao botao-exluir" href="#">
            Excluir
          </a>
        </td>
      </tr>
      </tbody>
    </table>
    `
    tableContent.innerHTML = turmaContent;
}

const turmasMetodos = (tag) => {
  let tagContent = (tag.innerText).toLowerCase()
  switch(tagContent){
    case 'detalhes':
      let id = tag.parentElement.parentElement.id;
      turmasDetalhes(id);
      break;
    case 'editar':
      console.log('Editar Turma')
      break;
    case 'deletar':
      console.log('Deletar Turma')
      break
    default:
      console.log('Sem ação')
      break;
  }

}

turmasTab.onclick = async () => {
  console.log("Fazendo requisição")
  if(!requisicaoFeita){
    await fetch("/admin/turmas")
    .then(data => data.json())
    .then(dataDecode => {
      turmas = dataDecode;
      requisicaoFeita = true;
    })
    .catch(err => console.log(err))
  }

  turmasIndex(conteudoTurmas);

}

conteudoTurmas.addEventListener('click', (event) => {
  let tag = event.target;
  turmasMetodos(tag)
})
