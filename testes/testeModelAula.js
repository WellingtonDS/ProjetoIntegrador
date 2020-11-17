const {sequelize, Aula} = require('../models');

Aula.findAll().then((resultado) => console.log(resultado));