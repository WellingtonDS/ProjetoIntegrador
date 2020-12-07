const {sequelize, Usuario} = require("../models");

Usuario.findByPk(112).then(
    usuario => {
        console.log(usuario.toJSON());
        sequelize.close();
    }
)