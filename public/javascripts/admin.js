const inputs = document.querySelectorAll('.checkbox');
const btnTarefas = document.getElementById('btn-tarefas');
const formularioTarefas = document.getElementById('tarefas');

// habilitar botao enviar
function habilitarBotaoTarefas(inputsMarcados){
  if(inputsMarcados > 0){
    btnTarefas.classList.add('ativo');
    return btnTarefas.removeAttribute('disabled');
  } else {
    btnTarefas.classList.remove('ativo');
    btnTarefas.setAttribute('disabled', 'disabled');
  }
}

function imprimirInput(inputs){
  inputs.forEach(input => {
    console.log(input)
  })
}

// verifica se os campos estão vazios
function verifarInputsTarefas(inputs){
  let inputsMarcados = 0;

  inputs.forEach(input => {
    if(input.checked){
      inputsMarcados += 1;
    }
  })

  habilitarBotaoTarefas(inputsMarcados)
}

// verifica os campos e ativa ou desativa o botao de envio
window.onload = () => {
  verifarInputsTarefas(inputs)
}

formularioTarefas.onchange = () => {
  verifarInputsTarefas(inputs)
}