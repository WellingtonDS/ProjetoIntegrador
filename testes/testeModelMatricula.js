const {sequelize, Matricula} = require('../models');

Matricula.findAll().then((resultado) => {
    console.log(resultado[0].dataValues);
    sequelize.close();
})