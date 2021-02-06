const {sequelize, Aluno, Matricula} = require('../models');

// Aluno.findAll({include: [{
//     model: Matricula,
//     as: 'matricula',
//     where:{turma_id: 9}
// }]}).then((aluno) => {
//     console.log(aluno[0].toJSON());
//     sequelize.close();
// })

Aluno.findAll(
    {
        include: [{association: 'turma', through: {atributes: 'matriculas'}}]
    })
    .then(alunos => {
        console.log(alunos[70]);
        sequelize.close();
    })
