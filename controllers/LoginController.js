const {sequelize, Usuario} = require('../models')

const LoginController = {
    showLogin: (req, res) => {
        res.render('login');
    },
    logar: async (req, res) => {
        let rota = null;
        let {email, senha} = req.body;

        let usuario = await Usuario.findOne({
            where:{
                email 
            }
        })
        
        if(usuario){
            req.session.usuario = usuario
            if(usuario.tipo == 'P'){
                rota = '/professor';
            } else { 
                rota = '/aluno';
            }    
        } else {
            rota = '/login';
        }

        res.redirect(rota);
        
    }

}

module.exports = LoginController;  