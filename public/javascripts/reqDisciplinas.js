const disciplinasTab = document.getElementById('disciplinas-tab');
const conteudoDisciplinas = document.getElementById('conteudoDisciplinas');
const disciplinaEditarLabel = document.getElementById('disciplinaEditarLabel');
const formDisciplinaEditar = document.getElementById('formDisciplinaEditar');
const inputsFormDisciplinasEditar = document.querySelectorAll('.input-disciplina-editar')
// const conteudoDisciplinas = document.getElementById('conteudoDisciplinas');
var disciplinas;
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
  let disciplina = null;
  let disciplinaContent = '';

  await fetch(`/admin/disciplinas/${disciplinaId}/detalhes`)
    .then(response => response.json())
    .then(responseJson => {
      disciplina = responseJson;
    })
  
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
            <td>Ana Francisca</td>
            <td>
              <a id="btnVoltar" class="botao botao-detalhes" href="#">
                Voltar
              </a>&nbsp;
              <a class="botao botao-editar" href="#" data-toggle="modal" data-target="#disciplinaEditar">
                Editar
              </a>&nbsp;
              <button type="submit" class="botao botao-exluir">
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
  formDisciplinaEditar.setAttribute('action', `/admin/disciplinas/${disciplina.id}/editar?_method=PUT`)
  inputsFormDisciplinasEditar[0].value = disciplina.nome
  inputsFormDisciplinasEditar[1].value = disciplina.descricao
  inputsFormDisciplinasEditar[2].value = 2;


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
          console.log("Disciplina não excluida")
        }
      } else {
        console.log("Excluindo Disciplina...")
      }
      
      break

    default:
      console.log("Fazendo nada")
      break;
  }
}

// fazendo requisição
disciplinasTab.onclick = async () => {

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

conteudoDisciplinas.addEventListener('click', (event) => {
  let tag = event.target;
  disciplinasMetodos(tag)
})