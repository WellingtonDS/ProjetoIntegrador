const {sequelize, TurmaProfessoresDisciplinas} = require('../models');

TurmaProfessoresDisciplinas.findAll().then(resultado => {
    console.log(resultado)
})