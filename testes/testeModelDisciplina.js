const {sequelize, Disciplina, ProfessorDisciplina, Turma} = require('../models');

// Disciplina.findAll({
//     include: [{
//         model: ProfessorDisciplina, 
//         as:'professoresDisciplinas',
//         where:{
//             professor_id: 33
//         },
//         include:[{
//             model: Turma,
//             as: 'turmas',
//             where:{
//                 turma_id: 9
//             }
//         }]
//     }]
// }).then((resultado) => console.log(resultado));

Disciplina.findAll(
    {
        include: {association: 'professores', through: {atributes: 'professores_disciplinas'}}
    })
    .then(resultado => {
        console.log(resultado[0])
        sequelize.close()
    })