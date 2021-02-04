const {sequelize, ProfessorDisciplina} = require('../models');

ProfessorDisciplina.findAll(
    {
        include: [
            "professor",
            "disciplina"
        ]
    })
    .then(resultado => {
    console.log(resultado[1].dataValues);
    sequelize.close();
})