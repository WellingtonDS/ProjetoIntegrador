const {sequelize, Turma} = require('../models');

Turma.findByPk(5).then((resultado) => {
    console.log(resultado.dataValues.serie);
})