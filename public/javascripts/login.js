// definindo variáveis
const formLogin = document.getElementById('formLogin');
const inputs = document.querySelectorAll('input');
const btnEnviar = document.getElementById('btnEnviar');

// verifica se há algum campo vazio no formulário
function verificarInputs(inputsArray){
  let camposVazios = 0;
  inputsArray.forEach(input => {
    if(input.value.length == 0){
      camposVazios += 1;
    }
  })

  return camposVazios;
}

// permite habilitar botão de envio do formulário
function habilitarBotao(){
  if(verificarInputs(inputs) == 0){
    btnEnviar.removeAttribute('disabled');
    btnEnviar.classList.add('ativo');
  } else {
    btnEnviar.setAttribute('disabled', 'disabled');
    btnEnviar.classList.remove('ativo');
  }
}

// eventos de formulário que chamam as funções:
// verificarInputs e habilitarBotao
formLogin.onchange = () => {
  habilitarBotao()
}

formLogin.onkeyup = () => {
  habilitarBotao()
}