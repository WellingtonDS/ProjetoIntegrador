const session = require("express-session");
const { sequelize, Professor, Aula, Usuario, ProfessorDisciplina, TurmaProfessoresDisciplinas } = require('../models');

const ProfessorController = {   
    index: async (req, res) => {
        // let professor = req.session.usuario
        let professor = req.session.usuario;

        let professorDisciplina = await ProfessorDisciplina.findOne(
        {
            where: {professor_id: professor.id},
            include: 'disciplina'
        })


        let aulas = await Aula.findAll(
        {
            where: {professores_disciplinas_id: professorDisciplina.id, situacao: false},
            include: 'turma'
        })
        
        console.log(professor)
        console.log(aulas)
        
        res.render('./professor/index', {professor, aulas, professorDisciplina})
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
    }    
}

module.exports = ProfessorController;