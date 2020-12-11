const {sequelize, Turma, ProfessorDisciplina, Disciplina} = require('../models');

Turma.findAll({
    include: [{
        model: ProfessorDisciplina, 
        as: 'professores_disciplinas', 
        where:{professor_id: 13},
        include: [{
            model: Disciplina,
            as: 'disciplinas'
        }]
    }],
    
}).then((resultado) => {
    console.log(resultado[0].dataValues);
})