const formTarefas = document.getElementById('formTarefas');
const data = document.getElementById('data');
const descricao = document.getElementById('descricao');
const btnEnviar = document.getElementById('btnEnviar');

// desabilita o botão de envio do formulário
// assim que a página é carrega ou recarregada
window.onload = () => {
  btnEnviar.setAttribute('disabled', 'disabled');
  data.value = "";
  descricao.value = "";
}

// verifica se os campos estão vazios
function verifarInputs(data, descricao){
  if(data.value && descricao.value){
    return btnEnviar.removeAttribute('disabled');
  } else {
    btnEnviar.setAttribute('disabled', 'disabled');
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