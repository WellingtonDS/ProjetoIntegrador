const session = require("express-session");

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
    }    
}

module.exports = ProfessorController;