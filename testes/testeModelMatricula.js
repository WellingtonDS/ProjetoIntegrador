const {sequelize, Matricula} = require('../models');

Matricula.findAll().then((resultado) => {
    console.log(resultado);
    sequelize.close();
})