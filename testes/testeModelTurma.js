const {sequelize, Turma, ProfessorDisciplina, Disciplina} = require('../models');

Turma.findOne(
    {
        where: {id: 11},
        include: [
            {association: 'alunos', through: {atributes: 'matriculas'}},
            {association: 'professores_disciplinas', through: {atributes: 'turmas_professores_disciplinas'}, include: 'professor'} 
            
        ]
    })
    .then(turmas => {
        console.log(turmas)
        sequelize.close()
    })