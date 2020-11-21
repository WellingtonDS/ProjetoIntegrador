const {sequelize, ProfessorDisciplina} = require('../models');

ProfessorDisciplina.findAll().then(resultado => {
    console.log(resultado);
    sequelize.close();
})