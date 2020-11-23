const session = require("express-session");
const {sequelize, Turma, ProfessorDisciplina, Disciplina} = require('../models');

const TurmaController = {
    listar: async (req, res) => {
        
        let professor = req.session.usuario;

        // pesquisa turmas onde um professor leciona
        let turmas = await Turma.findAll({
            include: [{
                model: ProfessorDisciplina, 
                as: 'turmas_professores_disciplinas', 
                where:{professor_id: professor.id},
                include: [{
                    model: Disciplina,
                    as: 'disciplina'
                }]
            }]
        });
        
        res.render('./professor/turmas/listar', {professor, turmas});
    },
    detalhes: async (req, res) => {
        let professor = req.session.usuario;
        let {turma_id} = req.params;

        // busca turma pelo id
        let turma = await Turma.findByPk(turma_id);

        // busca as disciplinas lecionadas pelo professor na turma atual
        let disciplinas = await Disciplina.findAll({
            include: [{
                model: ProfessorDisciplina, 
                as:'professoresDisciplinas',
                where:{
                    professor_id: professor.id
                },
                include:[{
                    model: Turma,
                    as: 'turmas',
                    where:{
                        turma_id: turma.turma_id
                    }
                }]
            }]
        })

        res.render('./professor/turmas/detalhes', {professor, turma, disciplinas});
    }
}

module.exports = TurmaController;