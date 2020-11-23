const {sequelize, Aluno, Turma} = require('../models');

Aluno.findAll({include: ['turma', 'usuario']}).then((aluno) => {
    console.log(aluno[0].turma[0].dataValues);
    sequelize.close();
})