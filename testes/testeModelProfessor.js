const {sequelize, Professor, Disciplina} = require("../models");
// const Disciplina = require("../models/Disciplina");

Professor.findOne(
    {   
        where: {id: 12},
        include: [
            {association: 'disciplinas', through:{atributes: 'professores_disciplinas'}}
        ]
    }
    
    ).then(
    professores => {
        console.log(professores);
        sequelize.close();
    }
); 
