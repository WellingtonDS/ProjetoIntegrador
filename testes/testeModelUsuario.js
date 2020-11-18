const {sequelize, Usuario} = require("../models");

Usuario.findByPk(102).then(
    usuario => {
        console.log(usuario.toJSON());
        sequelize.close();
    }
)