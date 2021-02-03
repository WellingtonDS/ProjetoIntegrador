const eventosTab = document.getElementById('eventos-tab');
const conteudoEventos = document.getElementById('conteudoEventos');
const eventoEditarLabel = document.getElementById('eventoEditarLabel');
const formEventoEditar = document.getElementById('formEventoEditar');
const inputsFormEventoEditar = document.querySelectorAll('.input-evento-editar')
var eventos;
var reqEventos = false;

// inserindo os dados no container
const eventosIndex = () => {
  let dataEventos = `<table class="table-responsive" id=""><thead><tr><th>Data</th><th>Descrição</th><th class="center">Ação</th></tr></thead><tbody id="dadosEventos">`

  eventos.forEach(evento => {
    let dataEditada = evento.data.split('T')[0].split('-').reverse().join('/')
    let tableEventoContent = document.getElementById('tableEventoContent');

    dataEventos += `
    <tr id="evento-${evento.id}" class="trTbody">
      
        <td class="">${dataEditada}</td>
        <td class="">${evento.descricao}</td>
        <td class="">
          <a class="botao botao-editar" href="#" data-toggle="modal" data-target="#eventoEditar">Editar</a>
          <button type="submit" class="botao botao-excluir">Excluir</button>
        </td>

    </tr>
    `
    
  })

  conteudoEventos.innerHTML = dataEventos + `</tbody></table>`;

}

const confirmEventosExcluir = (id) => {
  if(window.confirm(`Deseja exluir esse(a) evento(a) (${id})?`)){
    return true;
  }else{
    return false;
  }
}

const editarEvento = async (tr) => {
  let id = tr.attributes[0].nodeValue.split('-')[1];

  eventoEditarLabel.innerText = `Editar Evento #${id}`;
  formEventoEditar.setAttribute('action', `/admin/eventos/${id}/editar?_method=PUT`)
  inputsFormEventoEditar[0].value = tr.children[0].innerText;
  inputsFormEventoEditar[1].value = tr.children[1].innerText;

  formEventoEditar.addEventListener('change', (event) => {
    evento.data = inputsFormEventoEditar[0].value;
    evento.descricao = inputsFormEventoEditar[1].value;
    console.log(evento)
  })

}

const deletarEvento = async (id) => {
  console.log(id)
  let dadosEventos = document.getElementById('dadosEventos');
  let tr = document.getElementById(`evento-${id}`);
  await fetch(`/admin/eventos/${id}/deletar?_method=DELETE`, {
    method: 'POST',
  })
  .then(response => {
    console.log("Removento linha " + id)
    dadosEventos.removeChild(tr);
    window.location.reload();
  })
}

const eventosMetodos = (tag) => {
  let tagContent = (tag.innerText).toLowerCase().trim()
  let id = tag.parentElement.parentElement.id.split('-')[1];

  switch(tagContent){

    case 'voltar':
      eventosIndex();
      break;

    case 'editar':
      let tr = tag.parentElement.parentElement;
      editarEvento(tr);
      break;

    case 'excluir':

      if(confirmEventosExcluir(id)){
        deletarEvento(id)
      } else {
        eventosIndex()
      }
      
      break

    default:
      break;
  }
}

// fazendo requisição
eventosTab.onclick = async () => {

  if(!reqEventos){
    await fetch("/admin/eventos")
    .then(resultado => resultado.json())
    .then(resultadoJson => {
      eventos = resultadoJson;
      reqEventos = true;
    })
    .catch(err => console.log(err))
  }

  eventosIndex();

}

conteudoEventos.addEventListener('click', (event) => {
  let tag = event.target;
  eventosMetodos(tag)
})