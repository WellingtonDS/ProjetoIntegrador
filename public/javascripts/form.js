// variaveis form-tarefa
const formTarefa = document.getElementById('formTarefa');
const inputsNovaTarefa = document.querySelectorAll('.input-tarefa');
const btnNovaTarefa = document.getElementById('btnNovaTarefa');
const btnTarefaEnviar = document.getElementById('btnTarefaEnviar');

/*------------------------------------------------------------*/

// variaveis form-turma
const formTurma = document.getElementById('formTurma');
const inputsNovaTurma = document.querySelectorAll('.input-turma')
const btnNovaTurma = document.getElementById('btnNovaTurma');
const btnTurmaEnviar = document.getElementById('btnTurmaEnviar');

/*-------------------------------------------------------------*/ 
// variaveis form-disciplina
const formDisciplina = document.getElementById('formDisciplina');
const inputsNovaDisciplina = document.querySelectorAll('.input-disciplina')
const btnNovaDisciplina = document.getElementById('btnNovaDisciplina');
const btnDisciplinaEnviar = document.getElementById('btnDisciplinaEnviar');

/*-------------------------------------------------------------*/ 
// variaveis form-professor
const formProfessor = document.getElementById('formProfessor');
const inputsNovoProfessor = document.querySelectorAll('.input-professor')
const btnNovoProfessor = document.getElementById('btnNovoProfessor');
const btnProfessorEnviar = document.getElementById('btnProfessorEnviar');

/*-------------------------------------------------------------*/ 
// variaveis form-alunos
const formAluno = document.getElementById('formAluno');
const inputsNovoAluno = document.querySelectorAll('.input-aluno')
const btnNovoAluno = document.getElementById('btnNovoAluno');
const btnAlunoEnviar = document.getElementById('btnAlunoEnviar');

/*-------------------------------------------------------------*/ 
// variaveis form-eventos
const formEvento = document.getElementById('formEvento');
const inputsNovoEvento = document.querySelectorAll('.input-evento')
const btnNovoEvento = document.getElementById('btnNovoEvento');
const btnEventoEnviar = document.getElementById('btnEventoEnviar');

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
    return botao.removeAttribute('disabled');
  } else {
    botao.setAttribute('disabled', 'disabled');
  }

}

// verifica se os campos estão vazios
function verifarInputs(inputs, botao){
  let inputsVazios = 0;

  inputs.forEach(input => {
    if(input.value.length == 0){
      inputsVazios += 1;
    }
  })

  habilitarBotao(inputsVazios, botao)
}

// faz a chamada da função verificarInputs em duas situações
// quando há uma mudança no formulário
// e quando o usuário está digintando

/*------------------------------------------------------*/ 

btnNovaTarefa.onclick = () => {
  desabilitarBotao(inputsNovaTarefa, btnTarefaEnviar);
}

formTarefa.onkeyup = () => {
  verifarInputs(inputsNovaTarefa, btnTarefaEnviar);
}

formTarefa.onchange = () => {
  verifarInputs(inputsNovaTarefa, btnTarefaEnviar);
}

/*------------------------------------------------------*/

btnNovaTurma.onclick = () => {
  desabilitarBotao(inputsNovaTurma, btnTurmaEnviar);
}

formTurma.onkeyup = () => {
  verifarInputs(inputsNovaTurma, btnTurmaEnviar);
}

formTurma.onchange = () => {
  verifarInputs(inputsNovaTurma, btnTurmaEnviar);
}

/*------------------------------------------------------*/

btnNovaDisciplina.onclick = () => {
  console.log("Clicou")
  desabilitarBotao(inputsNovaDisciplina, btnDisciplinaEnviar);
}

formDisciplina.onkeyup = () => {
  verifarInputs(inputsNovaDisciplina, btnDisciplinaEnviar);
}

formDisciplina.onchange = () => {
  verifarInputs(inputsNovaDisciplina, btnDisciplinaEnviar);
}

/*------------------------------------------------------*/

btnNovoProfessor.onclick = () => {
  console.log("Clicou")
  desabilitarBotao(inputsNovoProfessor, btnProfessorEnviar);
}

formProfessor.onkeyup = () => {
  verifarInputs(inputsNovoProfessor, btnProfessorEnviar);
}

formProfessor.onchange = () => {
  verifarInputs(inputsNovoProfessor, btnProfessorEnviar);
}

/*------------------------------------------------------*/

btnNovoAluno.onclick = () => {
  desabilitarBotao(inputsNovoAluno, btnAlunoEnviar);
}

formAluno.onkeyup = () => {
  verifarInputs(inputsNovoAluno, btnAlunoEnviar);
}

formAluno.onchange = () => {
  verifarInputs(inputsNovoAluno, btnAlunoEnviar);
}

/*------------------------------------------------------*/

btnNovoEvento.onclick = () => {
  desabilitarBotao(inputsNovoEvento, btnEventoEnviar);
}

formEvento.onkeyup = () => {
  verifarInputs(inputsNovoEvento, btnEventoEnviar);
}

formEvento.onchange = () => {
  verifarInputs(inputsNovoEvento, btnEventoEnviar);
}