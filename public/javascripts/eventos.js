// definindo variaveis que serão manipuladas
const meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
const mesAnterior = document.getElementById('mesAnterior');
const mesAtual = document.getElementById('mesAtual');
const mesSeguinte = document.getElementById('mesSeguinte');
const mes = document.getElementById('mes')

// definindo o mes padrão que irá aparecer no primeiro carregamento
const date = new Date
mesAtual.innerText = meses[date.getMonth()]; 

let indice;

// comentar os resto do código
function altertarMes(event) {
    // recupera apenas o botao que foi clicado
    let botao = event.target.className.baseVal.split("-")[2];

    console.log(botao)

    if(botao === "right"){
        if(mesAtual.innerText === "Dezembro"){
            indice = 0;
        } else {
            indice += 1;
        }
    }

    if(botao === "left"){
        if(mesAtual.innerText === "Janeiro"){
            indice = 11;
        } else {
            indice -= 1;
        }
    }

    return mesAtual.innerText = meses[indice];
    
}

mes.addEventListener('click', (event) => {
    altertarMes(event)
})

/* 
    O que preciso fazer nesse arquivo e no back-end:

    1. criar rotas para acesso à tabela eventos;
    2. criar uma função para acessar a tabela eventos via fetch;
    3. criar lógica para trazer somente os eventos do mês atual;
    4. criar lógica que realize requisição de acordo com o botão clicado (next, previous) 
*/