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

        if(!listaDeErros.isEmpty()){
            return res.render('loginProfessor', {errors: listaDeErros.errors});
        }
        
        usuario = await Usuario.findOne({
            where:{
                email
            }
        });

        if(!usuario || usuario.senha !== senha){
            listaDeErros.errors.push({msg: 'Usuário ou senha inválido.'});
        }

        if(listaDeErros.isEmpty()){
            professor = await Professor.findOne({
                where:{
                    usuario_id: usuario.id 
                },
                include: 'usuario'
            });

            req.session.usuario = professor;
            res.redirect('/professor');
        }

        res.render('loginProfessor', {errors: listaDeErros.errors})
    }

}

module.exports = LoginController;  