const {sequelize, Avaliacao} = require('../models');

Avaliacao.findAll().then((resultado) => {
    console.log(resultado);
})