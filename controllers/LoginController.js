const {sequelize, Usuario, Professor, Aluno} = require('../models')

const LoginController = {
    showLoginProfessor: (req, res) => {
        res.render('loginProfessor');
    },
    showLoginAluno: (req, res) => {
        res.render('loginAluno');
    },
    logar: async (req, res) => {
        let {email, senha} = req.body;
        let usuario = await Usuario.findOne({
            where:{
                email
            }
        })

        let professor = await Professor.findOne({
            where:{
                usuario_id: usuario.id 
            },
            include: 'usuario'
        })
        req.session.usuario = professor;
        res.redirect('/professor');
        
        
    }

}

module.exports = LoginController;  