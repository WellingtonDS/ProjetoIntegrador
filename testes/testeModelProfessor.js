const {sequelize, Professor, Disciplina} = require("../models");
// const Disciplina = require("../models/Disciplina");

Professor.findByPk(31,{include: ['disciplinas', 'usuario']}).then(
    professores => {
        console.log(professores.toJSON());
        sequelize.close();
    }
); 
