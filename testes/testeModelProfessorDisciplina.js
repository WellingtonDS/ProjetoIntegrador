const {sequelize, ProfessorDisciplina} = require('../models');

ProfessorDisciplina.findAll({include: "disciplina"}).then(resultado => {
    console.log(resultado[0]);
    sequelize.close();
})