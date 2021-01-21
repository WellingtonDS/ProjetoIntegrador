const formTarefas = document.getElementById('formTarefas');
const data = document.getElementById('data');
const descricao = document.getElementById('descricao');
const btnTarefasEnviar = document.getElementById('btnTarefasEnviar');

// desabilita o botão de envio do formulário
// assim que a página é carrega ou recarregada
window.onload = () => {
  btnTarefasEnviar.setAttribute('disabled', 'disabled');
  data.value = "";
  descricao.value = "";
}

// verifica se os campos estão vazios
function verifarInputs(data, descricao){
  if(data.value && descricao.value){
    return btnTarefasEnviar.removeAttribute('disabled');
  } else {
    btnTarefasEnviar.setAttribute('disabled', 'disabled');
  }
}

// faz a chamada da função verificarInputs em duassituações
// quando há uma mudança no formulário
// e quando o usuário está digintando 
formTarefas.onchange = () => {
  verifarInputs(data, descricao);
}

formTarefas.onkeyup = () => {
  verifarInputs(data, descricao);
}