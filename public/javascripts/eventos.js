window.onload = () => {
    let mesSeguinte = document.getElementById("mesSeguinte");
    let mesAnterior = document.getElementById("mesAnterior");

    mesSeguinte.onclick = () => {
        alert("Botao next clicado!")
    }

    mesAnterior.onclick = () => {
        alert("Botao previous clicado!")
    }

}

/* 
    O que preciso fazer nesse arquivo e no back-end:

    1. criar rotas para acesso à tabela eventos;
    2. criar uma função para acessar a tabela eventos via fetch;
    3. criar lógica para trazer somente os eventos do mês atual;
    4. criar lógica que realize requisição de acordo com o botão clicado (next, previous) 
*/