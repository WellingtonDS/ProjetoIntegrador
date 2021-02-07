const {sequelize, TurmaProfessoresDisciplinas, ProfessorDisciplina} = require('../models');
let professorDisciplinaId;


// ProfessorDisciplina.findAll(
//     {
//         where: {professor_id: 2}
//     })
//     .then(resultado => {
//         professorDisciplinaId = resultado[0].dataValues.id;
//         sequelize.close()
//     })

TurmaProfessoresDisciplinas.findAll(
    {
        include: 'turma',
        where: {
          professores_disciplinas_id: 2
        }
    })
    .then(resultado => {
        console.log(resultado);
        sequelize.close();
    })