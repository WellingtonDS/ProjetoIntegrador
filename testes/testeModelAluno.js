const {sequelize, Aluno, Turma} = require('../models');

Aluno.findByPk(1,{include: 'usuario'}).then((aluno) => {
    console.log(aluno);
    sequelize.close();
})