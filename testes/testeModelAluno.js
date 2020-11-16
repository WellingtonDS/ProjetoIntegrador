const {sequelize, Aluno} = require('../models');

Aluno.findByPk(5).then((aluno) => {
    console.log(aluno)
})