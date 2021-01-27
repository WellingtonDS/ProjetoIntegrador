// variaveis form-tarefa
const formTarefa = document.getElementById('formTarefa');
const inputsNovaTarefa = document.querySelectorAll('.input-tarefa');
const btnNovaTarefa = document.getElementById('btnNovaTarefa');
const btnTarefaEnviar = document.getElementById('btnTarefaEnviar');

// /*------------------------------------------------------------*/

// variaveis form-turma
const formTurma = document.getElementById('formTurma');
const inputsNotaTurma = document.querySelectorAll('.input-turma')
const btnNovaTurma = document.getElementById('btnNovaTurma');
const btnTurmaEnviar = document.getElementById('btnTurmaEnviar');

/*-------------------------------------------------------------*/ 

// desabilita o botão de envio do formulário
// assim que a página é carrega ou recarregada
function desabilitarBotao(arrayInputs, botao){
  arrayInputs.forEach(input => {
    input.value = "";
  })
  botao.setAttribute('disabled', 'disabled');
}

// habilitar botao enviar
function habilitarBotao(inputsVazios, botao){
  
  if(inputsVazios == 0){
    console.log("botao habilitado")
    return botao.removeAttribute('disabled');
  } else {
    console.log("botao desabilitado")
    botao.setAttribute('disabled', 'disabled');
  }
  console.log(botao)
}

// // verifica se os campos estão vazios
function verifarInputs(inputs, botao){
  let inputsVazios = 0;

  inputs.forEach(input => {
    if(input.value.length == 0){
      inputsVazios += 1;
    }
  })

  habilitarBotao(inputsVazios, botao)
}

// // desabita o botão assim que o formulario surge na tela
// btnNovaTarefa.onclick = () => {
//   desabilitarBotao(btnTarefaEnviar, inputsFormTarefa);
// }

// // faz a chamada da função verificarInputs em duas situações
// // quando há uma mudança no formulário
// // e quando o usuário está digintando
/*------------------------------------------------------*/ 

btnNovaTarefa.onclick = () => {
  desabilitarBotao(inputsNovaTarefa, btnTarefaEnviar);
}

formTarefa.onkeyup = () => {
  console.log("Teclou")
  verifarInputs(inputsNovaTarefa, btnTarefaEnviar);
}

formTarefa.onchange = () => {
  console.log("Mudou")
  verifarInputs(inputsNovaTarefa, btnTarefaEnviar);
}