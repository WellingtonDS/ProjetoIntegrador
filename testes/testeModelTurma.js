const {sequelize, Turma, ProfessorDisciplina} = require('../models');

Turma.findAll({include: [{
    model: ProfessorDisciplina, 
    as: 'professores_disciplinas', where:{professor_id: 33}}]}).then((resultado) => {
    console.log(resultado);
})