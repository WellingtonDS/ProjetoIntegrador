const {sequelize, ProfessorDisciplina} = require('../models');

ProfessorDisciplina.findAll(
    {
        include: [
            "professor",
            "disciplina"
        ]
    })
    .then(resultado => {
    console.log(resultado[0].dataValues);
    sequelize.close();
})