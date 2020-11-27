const {sequelize, Professor, Disciplina} = require("../models");
// const Disciplina = require("../models/Disciplina");

Professor.findAll().then(
    professores => {
        console.log(professores[0].dataValues);
        sequelize.close();
    }
); 
