const {Aula} = require('../models');

let aula = Aula.create({
    data: new Date(),
    descricao: 'teste',
    turma_id: 9,
    professores_disciplinas_id: 11
});

console.log(aula);