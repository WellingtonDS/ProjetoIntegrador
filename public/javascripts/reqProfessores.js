const professoresTab = document.getElementById('professores-tab');
const conteudoProfessores = document.getElementById('conteudoProfessores');
const professorEditarLabel = document.getElementById('professorEditarLabel');
const formProfessorEditar = document.getElementById('formProfessorEditar');
const inputsFormprofessoresEditar = document.querySelectorAll('.input-professor-editar')
var professores;
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
  let professor = null;
  let professorContent = '';

  await fetch(`/admin/professores/${professorId}/detalhes`)
    .then(response => response.json())
    .then(responseJson => {
      professor = responseJson;
    })
  
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
          <th>Usuario Id</th>
          <th class="center">Ações</th>
        </tr>
      </thead>
      <tbody id="dadosProfessor">
        
          <tr id="${professor.id}" class="trTbody">
            <td>${professor.id}</td>
            <td>${professor.nome} ${professor.sobrenome}</td>
            <td>${professor.telefone}</td>
            <td>${professor.usuario.email}</td>
            <td>${professor.disciplinas[0].nome}</td>
            <td>${professor.usuario_id}</td>
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
  `
  tableProfessorContent.innerHTML = professorContent;
  professorEditarLabel.innerText = `Editar professor #${professor.id}`;
  formProfessorEditar.setAttribute('action', `/admin/professores/${professor.id}/editar?_method=PUT`)
  inputsFormprofessoresEditar[0].value = professor.nome;
  inputsFormprofessoresEditar[1].value = professor.sobrenome;
  inputsFormprofessoresEditar[2].value = professor.telefone;
  inputsFormprofessoresEditar[3].value = professor.usuario_id;


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

// fazendo requisição
professoresTab.onclick = async () => {

  if(!reqProfessores){
    await fetch("/admin/professores")
    .then(resultado => resultado.json())
    .then(resultadoJson => {
      professores = resultadoJson;
      reqProfessores = true;
    })
    .catch(err => console.log(err))
  }

  professoresIndex();

}

conteudoProfessores.addEventListener('click', (event) => {
  let tag = event.target;

  professoresMetodos(tag)
})