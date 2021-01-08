// definindo variaveis que serão manipuladas
let meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

const botaoLeft = document.getElementById("botaoLeft");
const botaoRight = document.getElementById("botaoRight");

var diaMes = 0;

// comentar os resto do código
function alterarMes(event) {
    // recupera apenas o botao que foi clicado
    let botao = event.target.className.baseVal.split("-")[2];

    alert(botao)
}

botaoLeft.addEventListener('click', (event) => {
    alterarMes(event)
})

botaoRight.addEventListener('click', (event) => {
    alterarMes(event)
})