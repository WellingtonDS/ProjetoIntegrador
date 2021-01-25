// variaveis form-tarefa
const formTarefa = document.getElementById('formTarefa');
const data = document.getElementById('data');
const descricao = document.getElementById('descricao');
const btnNovaTarefa = document.getElementById('btnNovaTarefa');
const btnTarefaEnviar = document.getElementById('btnTarefaEnviar');

// // arrays com os inputs do formulario de tarefa
const inputsFormTarefa = [data, descricao];

// /*------------------------------------------------------------*/

// // variaveis form-turma
const formTurma = document.getElementById('formTurma');
const serie = document.getElementById('serie');
const nivel = document.getElementById('nivel');
const turno = document.getElementById('turno');
const btnNovaTurma = document.getElementById('btnNovaTurma');
const btnTurmaEnviar = document.getElementById('btnTurmaEnviar');

// // arrays com os inputs do formulario de turma
const inputsFormTurma = [serie, nivel, turno];

/*-------------------------------------------------------------*/ 

// desabilita o botão de envio do formulário
// assim que a página é carrega ou recarregada
function desabilitarBotao(botao, arrayInputs){
  arrayInputs.forEach(input => {
    input.value = "";
  })
  botao.setAttribute('disabled', 'disabled');
}

// habilitar botao enviar
function habilitarBotao(inputsVazios, botao){
  if(inputsVazios == 0){
    return botao.removeAttribute('disabled');
  } else {
    botao.setAttribute('disabled', 'disabled');
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

// // desabita o botão assim que o formulario surge na tela
btnNovaTarefa.onclick = () => {
  desabilitarBotao(btnTarefaEnviar, inputsFormTarefa);
}

btnNovaTurma.onclick = () => {
  desabilitarBotao(btnTurmaEnviar, inputsFormTurma);
}

// // faz a chamada da função verificarInputs em duas situações
// // quando há uma mudança no formulário
// // e quando o usuário está digintando 
formTarefa.onchange = () => {
  verifarInputs(inputsFormTarefa);
}

// formTarefa.onkeyup = () => {
//   verifarInputs(inputsFormTarefa);
// }

/*------------------------------------------------------*/ 

formTurma.onchange = () => {
  verifarInputs(inputsFormTurma);
}

formTurma.onkeyup = () => {
  verifarInputs(inputsFormTurma);
}

const tarefas = document.getElementById('tarefas')
const turmas = document.getElementById('turmas')
// console.log(tarefas.classList.contains('active'))

btnNovaTarefa.onclick = () => {
  console.log(tarefas.classList.contains('active'))
}

btnNovaTurma.onclick = () => {
  console.log(turmas.classList.contains('active'))
}
