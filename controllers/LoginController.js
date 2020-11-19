const {sequelize, Usuario, Professor, Aluno} = require('../models');
const {check, validationResult, body} = require('express-validator');

const LoginController = {
    showLoginProfessor: (req, res) => {
        res.render('loginProfessor');
    },
    showLoginAluno: (req, res) => {
        res.render('loginAluno');
    },
    logar: async (req, res) => {
        let usuario = null;
        let professor = null;
        let {email, senha} = req.body;
        let listaDeErros = validationResult(req);

        if(listaDeErros.isEmpty()){
            usuario = await Usuario.findOne({
                where:{
                    email
                }
            });

            professor = await Professor.findOne({
                where:{
                    usuario_id: usuario.id 
                },
                include: 'usuario'
            })
            req.session.usuario = professor;
        }else{
            res.render('loginProfessor', {errors: listaDeErros.errors})
        }

        res.redirect('/professor');
        
        
    }

}

module.exports = LoginController;  