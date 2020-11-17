const {sequelize, Disciplina} = require('../models');

Disciplina.findAll().then((resultado) => console.log(resultado));