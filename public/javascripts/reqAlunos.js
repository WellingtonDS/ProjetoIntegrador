const alunosTab = document.getElementById('alunos-tab');
const conteudoAlunos = document.getElementById('conteudoAlunos');
const alunoEditarLabel = document.getElementById('alunoEditarLabel');
const formAlunosEditar = document.getElementById('formAlunosEditar');
const inputsFormAlunosEditar = document.querySelectorAll('.input-alunos-editar')
var alunos;
var reqAlunos = false;

// inserindo os dados no container
const alunosIndex = () => {
  let dataAlunos = `<table class="table-responsive" id=""><thead><tr><th>Nome</th><th>Responsavel</th><th>Endereço</th><th class="center">Ação</th></tr></thead><tbody id="dadosAlunos">`

  alunos.forEach(alunos => {

    dataAlunos += `
    <tr id="${alunos.id}" class="trTbody">
      <td class="">${alunos.nome} ${alunos.sobrenome}</td>
      <td class="">${alunos.responsavel}</td>
      <td class="">${alunos.endereco}</td>
      <td class="">
        <a class="botao botao-detalhes" href="#">Detalhes</a>
      </td>  
    </tr>
    `
  })

  conteudoAlunos.innerHTML = dataAlunos + `</tbody></table>`;

}

const alunosDetalhes = async (alunosId) => {
  let tableAlunosContent = document.getElementById('conteudoAlunos');
  let alunos = null;
  let alunosContent = '';

  await fetch(`/admin/alunos/${alunosId}/detalhes`)
    .then(response => response.json())
    .then(responseJson => {
      alunos = responseJson;
    })
  
  // gerando string que será inserinda no html
  alunosContent = `
  <form id="formAlunosDeletar" action="/admin/alunos/${alunos.id}/deletar?_method=DELETE" method="POST">
    <table class="table-responsive">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Responsável</th>
          <th>Telefone</th>
          <th>Usuario Id</th>
          <th class="center">Ações</th>
        </tr>
      </thead>
      <tbody id="dadosAlunos">
        
          <tr id="${alunos.id}" class="trTbody">
            <td>${alunos.id}</td>
            <td>${alunos.nome} ${alunos.sobrenome}</td>
            <td>${alunos.responsavel}</td>
            <td>${alunos.endereco}</td>
            <td>${alunos.usuario_id}</td>
            <td>
              <a id="btnVoltar" class="botao botao-detalhes" href="#">
                Voltar
              </a>&nbsp;
              <a class="botao botao-editar" href="#" data-toggle="modal" data-target="#alunoEditar">
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
  tableAlunosContent.innerHTML = alunosContent;
  alunoEditarLabel.innerText = `Editar aluno #${alunos.id}`;
  formAlunosEditar.setAttribute('action', `/admin/alunos/${alunos.id}/editar?_method=PUT`)
  inputsFormAlunosEditar[0].value = alunos.nome;
  inputsFormAlunosEditar[1].value = alunos.sobrenome;
  inputsFormAlunosEditar[2].value = alunos.responsavel;
  inputsFormAlunosEditar[3].value = alunos.endereco;
  inputsFormAlunosEditar[4].value = alunos.usuario_id;


}

const confirmAlunosExcluir = (id) => {
  if(window.confirm(`Deseja exluir esse(a) Aluno(a) (${id})?`)){
    return true;
  }else{
    return false;
  }
}

const alunosMetodos = (tag) => {
  let tagContent = (tag.innerText).toLowerCase().trim()
  let id = tag.parentElement.parentElement.id;
  let formAlunosDeletar = document.getElementById('formAlunosDeletar')
  
  switch(tagContent){
    case 'detalhes':
      console.log(id)
      alunosDetalhes(id)
      break;

    case 'voltar':
      alunosIndex();
      break;

    case 'editar':
      break;

    case 'excluir':
      
      if(!confirmAlunosExcluir(id)){
        formAlunosDeletar.onsubmit = (event) => {
          event.preventDefault();
          console.log("Aluno não excluido")
        }
      } else {
        console.log("Excluindo aluno...")
      }
      
      break

    default:
      console.log("Fazendo nada")
      break;
  }
}

// fazendo requisição
alunosTab.onclick = async () => {

  if(!reqAlunos){
    await fetch("/admin/alunos")
    .then(resultado => resultado.json())
    .then(resultadoJson => {
      alunos = resultadoJson;
      reqAlunos = true;
    })
    .catch(err => console.log(err))
  }

  alunosIndex();

}

conteudoAlunos.addEventListener('click', (event) => {
  let tag = event.target;
  console.log(tag)
  alunosMetodos(tag)
})