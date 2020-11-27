const session = require("express-session");

const AlunoController = {   
    index: (req, res) => {
        // let aluno = req.session.usuario
        res.render('./aluno/index', {aluno: req.session.usuario});
    },
    perfil:(req, res) => {
        // let aluno = req.session.usuario
        res.render('./aluno/perfil', {aluno: req.session.usuario});
    },
    horarios: (req, res) => {
        res.render('./aluno/horarios', {aluno: req.session.usuario});
    },
    boletim: (req, res) => {
        res.render('./aluno/boletim', {aluno: req.session.usuario});
    },
    partialMenu: (req, res) => {
        res.render('./aluno/partialMenu', {aluno: req.session.usuario});
    }
}

module.exports = AlunoController;