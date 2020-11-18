const {sequelize, Professor} = require("../models");

Professor.findByPk(3,{include: 'usuario'}).then(
    professores => {
        console.log(professores.toJSON());
        sequelize.close();
    }
);
