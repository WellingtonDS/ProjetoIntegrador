const {sequelize, Aluno, Matricula} = require('../models');

// Aluno.findAll({include: [{
//     model: Matricula,
//     as: 'matricula',
//     where:{turma_id: 9}
// }]}).then((aluno) => {
//     console.log(aluno[0].toJSON());
//     sequelize.close();
// })

Aluno.findAll().then(aluno => {
    console.log(aluno[0].toJSON())
})