const {sequelize, Usuario} = require("../models");

Usuario.findByPk(2).then(
    usuario => {
        console.log(usuario.toJSON());
        sequelize.close();
    }
)