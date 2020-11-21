const {sequelize, Professor} = require("../models");

Professor.findByPk(31,{include: 'usuario'}).then(
    professores => {
        console.log(professores.toJSON());
        sequelize.close();
    }
); 
