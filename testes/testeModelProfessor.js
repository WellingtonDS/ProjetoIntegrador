const {sequelize, Professor} = require("../models");

Professor.findByPk(32,{include: 'usuario'}).then(
    professores => {
        console.log(professores.dataValues);
        console.log(professores.usuario.dataValues);
        sequelize.close();
    }
);
