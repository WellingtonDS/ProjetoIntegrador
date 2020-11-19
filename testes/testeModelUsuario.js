const {sequelize, Usuario} = require("../models");

Usuario.findByPk(12).then(
    usuario => {
        console.log(usuario.toJSON());
        sequelize.close();
    }
)