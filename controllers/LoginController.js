const {sequelize, Usuario, Professor, Aluno} = require('../models')

const LoginController = {
    showLogin: (req, res) => {
        res.render('login');
    },
    logar: async (req, res) => {
        let rota = null;
        let {email} = req.body;

        let usuario = await Usuario.findOne({
            where:{
                email 
            }
        })

        let usuarioFinal = null;

        if(usuario){
            req.session.usuario = usuario
            if(usuario.tipo == 'P'){
                usuarioFinal = Professor.findOne({
                    where:{
                        email
                    },
                    include: 'usuario'
                })
                
            } else { 
                usuarioFinal = Aluno.findOne({
                    where:{
                        email
                    },
                    include: 'usuario'
                })
                
            }    
        } else {
            rota = '/login';
        }

        res.send(usuarioFinal);
        
    }

}

module.exports = LoginController;  