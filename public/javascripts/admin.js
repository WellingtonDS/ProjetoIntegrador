const inputs = document.querySelectorAll('.checkbox');
const btnTarefas = document.getElementById('btn-tarefas');
const formularioTarefas = document.getElementById('tarefas');

// habilitar botao enviar
function habilitarBotao(inputsVazios){
  if(inputsVazios == 0){
    return btnTarefas.removeAttribute('disabled');
  } else {
    btnTarefas.setAttribute('disabled', 'disabled');
  }
}

// // verifica se os campos estão vazios
function verifarInputs(inputs){
  let inputsVazios = 0;

  inputs.forEach(input => {
    if(input.value.length === 0){
      inputsVazios += 1;
    }
  })

  habilitarBotao(inputsVazios)
}

formularioTarefas.onclick = () => {
  verifarInputs(inputs)
}