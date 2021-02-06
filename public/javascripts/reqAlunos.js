const alunosTab = document.getElementById('alunos-tab');
const conteudoAlunos = document.getElementById('conteudoAlunos');
const alunoEditarLabel = document.getElementById('alunoEditarLabel');
const formAlunosEditar = document.getElementById('formAlunosEditar');
const inputsFormAlunosEditar = document.querySelectorAll('.input-aluno-editar')
const formAlunosBuscar = document.getElementById('formAlunosBuscar');
const inputBuscarAluno = document.getElementById('inputBuscarAluno');
const alertErroAlunos = document.getElementById('alertErroAlunos');
const fecharAlertErroAlunos = document.getElementById('fecharAlertErroAlunos');
const alertWarningAlunos = document.getElementById('alertWarningAlunos');
const fecharAlertWarningAlunos = document.getElementById('fecharAlertWarningAlunos');

var alunos;
var alunosFiltrados;
var alunoBusca;
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

const alunosDetalhes = async (alunoId) => {
  let tableAlunoContent = document.getElementById('conteudoAlunos');
  let aluno = null;
  let turma;
  let alunoContent = '';

  await fetch(`/admin/alunos/${alunoId}/detalhes`)
    .then(response => response.json())
    .then(responseJson => {
      aluno = responseJson;
    })

  turma = aluno.turma;

  if(turma.length > 0) {
    turma = `${aluno.turma[0].serie} - ${aluno.turma[0].nivel}`;
  } else {
    turma = "Aluno(a) NÃO matriculado(a)"
  }

  // gerando string que será inserinda no html
  alunoContent = `
  <form id="formAlunosDeletar" action="/admin/alunos/${aluno.id}/deletar?_method=DELETE" method="POST">
    <table class="table-responsive">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Responsável</th>
          <th>Telefone</th>
          <th>Usuario Id</th>
          <th>Turma</th>
          <th class="center">Ações</th>
        </tr>
      </thead>
      <tbody id="dadosAlunos">
        
          <tr id="${aluno.id}" class="trTbody">
            <td>${aluno.id}</td>
            <td>${aluno.nome} ${aluno.sobrenome}</td>
            <td>${aluno.responsavel}</td>
            <td>${aluno.endereco}</td>
            <td>${aluno.usuario_id}</td>
            <td>${turma}</td>
            <td>
              <a id="btnVoltar" class="botao botao-detalhes" href="#">
                Voltar
              </a>&nbsp;
              <a class="botao botao-editar" href="#" data-toggle="modal" data-target="#alunoEditar">
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
  tableAlunoContent.innerHTML = alunoContent;
  alunoEditarLabel.innerText = `Editar aluno #${aluno.id}`;
  formAlunosEditar.setAttribute('action', `/admin/alunos/${aluno.id}/editar?_method=PUT`)
  inputsFormAlunosEditar[0].value = aluno.nome;
  inputsFormAlunosEditar[1].value = aluno.sobrenome;
  inputsFormAlunosEditar[2].value = aluno.responsavel;
  inputsFormAlunosEditar[3].value = aluno.endereco;
  inputsFormAlunosEditar[4].value = aluno.usuario_id;


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
      inputBuscarAluno.value = "";
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

        }
      }

      break

    default:

      break;
  }
}

// inicio da area de busca
// insere os dados filtrados vindos do backend na aba alunos
const alunosFiltradosMostrar = () => {

  if(alunosFiltrados.length == 0 || alunosFiltrados == undefined){
    alertWarningAlunos.style.display = 'flex';
  } else {
    alertWarningAlunos.style.display = "";

    let dataTableAlunosFitrados = `<table class="table-responsive" id=""><thead><tr><th>Nome</th><th>Responsavel</th><th>Endereço</th><th class="center">Ação</th></tr></thead><tbody id="dadosAlunos">`
    alunosFiltrados.forEach(alunoFiltrado => {
    
      dataTableAlunosFitrados += `<tr id="${alunoFiltrado.id}" class="trTbody">
      <td class="">${alunoFiltrado.nome} ${alunoFiltrado.sobrenome}</td>
      <td class="">${alunoFiltrado.responsavel}</td>
      <td class="">${alunoFiltrado.endereco}</td>
      <td class="">
        <a class="botao botao-detalhes" href="#">Detalhes</a>
      </td>  
    </tr>
      ` 
      conteudoAlunos.innerHTML = dataTableAlunosFitrados + `</tbody></table>`;
    })
  }
}

const verificarErroAluno = (alunoBusca) => {
  let erro = true;
  if(alunoBusca == undefined || alunoBusca == ""){
    alertErroAlunos.style.display = 'flex';
  } else {
    alertErroAlunos.style.display = 'none';
    erro = false;
  }

  return erro;
}

formAlunosBuscar.onsubmit = async (event) => {
  event.preventDefault()
  console.log(alunoBusca)
  if(verificarErroAluno(alunoBusca) || alunoBusca == ""){
    return
  } else {
    console.log("Formulario submetido")
    await fetch(`/admin/alunos/buscar?aluno=${ alunoBusca }`)
      .then(resultado => resultado.json())
      .then(resultadoJson => {
        console.log(resultadoJson)
        alunosFiltrados = resultadoJson;
      })
  }

  alunosFiltradosMostrar();

}

inputBuscarAluno.addEventListener('click', event => {
  alunoBusca = inputBuscarAluno.value
});

inputBuscarAluno.addEventListener('keyup', event => {
  alunoBusca = inputBuscarAluno.value;
});

formAlunosBuscar.addEventListener('change', event => {
  alunoBusca = inputBuscarAluno.value;
})

fecharAlertErroAlunos.onclick = () => {
  alertErroAlunos.style.display = "";
}

fecharAlertWarningAlunos.onclick = () => {
  alertWarningAlunos.style.display = "";
}

// fazendo requisição
alunosTab.onclick = async () => {

  inputBuscarAluno.value = "";

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
  alunosMetodos(tag)
})