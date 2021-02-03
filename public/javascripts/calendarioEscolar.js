// definindo variaveis que serão manipuladas
let meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

const mesAtivo = document.getElementById('mesAtivo');
const mesAnterior = document.getElementById('mesAnterior');
const mesSeguinte = document.getElementById('mesSeguinte');

const botaoLeft = document.getElementById("botaoLeft");
const botaoRight = document.getElementById("botaoRight");

var diaMes = 0;

window.onload = () => {

    // desativa o botão
    // remove o atributo href da tag a (botao esquerdo)
    if(mesAtivo.innerText === "Janeiro"){
        mesAnterior.classList.add('botaoDesativado');
        mesAnterior.removeAttribute('href');
    }

    // desativa o botão
    // remove o atributo href da tag a (botao direito)
    if(mesAtivo.innerText === "Dezembro"){
        mesSeguinte.classList.add('botaoDesativado');
        mesSeguinte.removeAttribute('href');
    }

}

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