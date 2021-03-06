const {sequelize, Usuario, Admin, Professor, Aluno} = require('../models');
const {check, validationResult, body} = require('express-validator');
const bcrypt = require('bcrypt');

const LoginController = {
    showLoginAdmin: (req, res) => {
        res.render('loginAdmin');
    },
    showLoginProfessor: (req, res) => {
        res.render('loginProfessor');
    },
    showLoginAluno: (req, res) => {
        res.render('loginAluno');
    },
    logarAdmin: async (req, res) => {
        let usuario = null;
        let admin = null;
        let {email, senha} = req.body;
        let listaDeErros = validationResult(req);

        if(!listaDeErros.isEmpty()){
            return res.render('loginAdmin', {errors: listaDeErros.errors});
        }
        
        usuario = await Usuario.findOne({
            where:{
                email
            }
        });

        if(!usuario || !bcrypt.compareSync(senha, usuario.senha)){
            listaDeErros.errors.push({msg: 'Usuário ou senha inválido.'});
        }

        if(listaDeErros.isEmpty()){
            admin = await Admin.findOne({
                where:{
                    usuario_id: usuario.id
                },
                include: 'usuario'
            });

            req.session.usuario = admin;
            return res.redirect('/admin');

        }

        res.render('loginAdmin', {errors: listaDeErros.errors})
    },
    logarProfessor: async (req, res) => {
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

        if(!usuario || !bcrypt.compareSync(senha, usuario.senha)){
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
            return res.redirect('/professor');
        }

        res.render('loginProfessor', {errors: listaDeErros.errors})
    },
    logout: (req, res) => {
        req.session.usuario = null;
        res.redirect('/')
    },
    logarAluno: async (req, res) => {
        let usuario = null;
        let aluno = null;
        let {email, senha} = req.body;
        let listaDeErros = validationResult(req);

        if(!listaDeErros.isEmpty()){
            return res.render('loginAluno', {errors: listaDeErros.errors});
        }
        
        usuario = await Usuario.findOne({
            where:{
                email
            }
        });

        if(!usuario || !bcrypt.compareSync(senha, usuario.senha)){
            listaDeErros.errors.push({msg: 'Usuário ou senha inválido.'});
        }

        if(listaDeErros.isEmpty()){
            aluno = await Aluno.findOne({
                where:{
                    usuario_id: usuario.id 
                },
                include: 'usuario'
            });

            req.session.usuario = aluno;
            res.redirect('/aluno');
        }

        res.render('loginAluno', {errors: listaDeErros.errors})
    }
    
}

module.exports = LoginController;  