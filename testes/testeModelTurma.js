const {sequelize, Turma, ProfessorDisciplina, Disciplina} = require('../models');

Turma.findAll({
    include: [{
        model: ProfessorDisciplina, 
        as: 'professores_disciplinas', 
        where:{professor_id: 33},
        include: [{
            model: Disciplina,
            as: 'disciplina'
        }]
    }],
    
}).then((resultado) => {
    console.log(resultado[0].dataValues);
})