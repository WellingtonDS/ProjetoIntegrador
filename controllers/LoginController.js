const {sequelize, Usuario} = require('../models')

const LoginController = {
    showLogin: (req, res) => {
        res.render('login');
    },
    logar: async (req, res) => {
        let {email, senha} = req.body;
        let usuario = await Usuario.findOne({
            where:{
                email
            }
        })

        req.session.usuario = usuario
        res.redirect('/professor')
    }

}

module.exports = LoginController;  