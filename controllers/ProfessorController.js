const session = require("express-session");
const {sequelize, Turma, ProfessorDisciplina, Disciplina} = require('../models');

const ProfessorController = {   
    index: (req, res) => {
        // let professor = req.session.usuario
        res.render('./professor/index', {professor: req.session.usuario});
    },
    perfil:(req, res) => {
        // let professor = req.session.usuario
        res.render('./professor/perfil', {professor: req.session.usuario});
    },
    horarios: (req, res) => {
        res.render('./professor/horarios', {professor: req.session.usuario});
    },
    disciplinas: (req, res) => {
        res.render('./professor/disciplinas', {professor: req.session.usuario});
    },
    turmas: async (req, res) => {
        
        let professor = req.session.usuario;

        // pesquisa turmas onde um professor leciona
        let turmas = await Turma.findAll({
            include: [{
                model: ProfessorDisciplina, 
                as: 'professores_disciplinas', 
                where:{professor_id: professor.id},
                include: [{
                    model: Disciplina,
                    as: 'disciplina'
                }]
            }]
        });

        console.log(turmas)
        res.render('./professor/turmas', {professor, turmas});
    }
}

module.exports = ProfessorController;