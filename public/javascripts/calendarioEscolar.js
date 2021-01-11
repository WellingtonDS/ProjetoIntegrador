// definindo variaveis que serão manipuladas
let meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

const mesAtivo = document.getElementById('mesAtivo');
const mesAnterior = document.getElementById('mesAnterior');
const mesSeguinte = document.getElementById('mesSeguinte');

const botaoLeft = document.getElementById("botaoLeft");
const botaoRight = document.getElementById("botaoRight");

var diaMes = 0;

window.onload = () => {
    // remove o atributo href da tag a (botao esquerdo)
    if(mesAtivo.innerText === "Janeiro"){
        mesAnterior.removeAttribute('href');
    }

    // remove o atributo href da tag a (botao direito)
    if(mesAtivo.innerText === "Dezembro"){
        mesSeguinte.removeAttribute('href');
    }

}

// comentar os resto do código
function alterarMes(event) {
    // recupera apenas o botao que foi clicado
    let botao = event.target.className.baseVal.split("-")[2];
}

botaoLeft.addEventListener('click', (event) => {
    alterarMes(event)
})

botaoRight.addEventListener('click', (event) => {
    alterarMes(event)
})