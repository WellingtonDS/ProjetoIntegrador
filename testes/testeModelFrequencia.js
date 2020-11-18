const {sequelize, Frequencia} = require('../models');

Frequencia.findAll().then((resultado) => {
    console.log(resultado);
    sequelize.close();
})