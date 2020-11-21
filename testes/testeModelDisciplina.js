const {sequelize, Disciplina} = require('../models');

Disciplina.findByPk(1, {include: 'professores'}).then((resultado) => console.log(resultado.toJSON()));