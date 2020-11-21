const {sequelize, Disciplina} = require('../models');

Disciplina.findAll({include:'professores'}).then((resultado) => console.log(resultado));