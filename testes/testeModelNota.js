const {sequelize, Nota} = require('../models');

Nota.findAll().then((resultado) => {
    console.log(resultado);
})