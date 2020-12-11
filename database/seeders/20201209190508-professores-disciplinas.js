'use strict';
const { sequelize, Professor, Disciplina} = require('../../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    let professores = await Professor.findAll().then();
    let disciplinas = await Disciplina.findAll().then();
    let professoresDisciplinas = [];

    for(let i=0; i < professores.length; i++){
        professoresDisciplinas.push({
            professor_id: professores[i].dataValues.id,
            disciplina_id: disciplinas[i].dataValues.id
        });
    }
    console.log(professores)

    await queryInterface.bulkInsert('professores_disciplinas', professoresDisciplinas)
    
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('professores_disciplinas', null, {});

  }
};
