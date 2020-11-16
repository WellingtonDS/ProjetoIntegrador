const {sequelize, Professor} = require("../models");

Professor.findOne({
    where:{
        nome: "Juliana"
    }
}).then(
    professores => {
        console.log(professores);
        sequelize.close();
    }
);
