const FormTarefas = document.getElementById('FormTarefas');
const tarefasContent = document.getElementById('tarefasContent');
var tr;

FormTarefas.addEventListener('click', event => {
  tr = event.target.parentElement.parentElement;
})

FormTarefas.onsubmit = (event) => {
  tarefasContent.removeChild(tr);
  window.location.reload()
}

