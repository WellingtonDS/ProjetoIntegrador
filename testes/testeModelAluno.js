const {sequelize, Aluno} = require('../models');

Aluno.findByPk(5, {include: 'usuario'}).then((aluno) => {
    console.log(aluno.dataValues);
    console.log(aluno.usuario.dataValues)
    sequelize.close();
})