'use strict';
const {sequelize, Turma, TumaProfessoresDisciplinas, ProfessorDisciplina} = require('../../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

      // seleciona turmas
      let turmas = await Turma.findAll({
        where:{
          nivel: 'Médio'
        }
      })
      
      // seleciona ProfessoresDisciplinas
      let professoresDisciplinas = await ProfessorDisciplina.findAll();
      // instancia array para inserção de objetos de turmas_has...
      let turmas_has_professores_disciplinas = [];

      // criando os objetos de turmas_has...
      // para cada turma será criado a quantidade de objetos que contem professoreDisciplinas
      for(let i=0; i < turmas.length; i++){ 
        for(let j=0; j < professoresDisciplinas.length; j++){
          turmas_has_professores_disciplinas.push({
            turma_id: turmas[i].dataValues.turma_id,
            professores_disciplinas_id: professoresDisciplinas[j].dataValues.id
          })

        }
        
      }
      console.log(turmas_has_professores_disciplinas)
      // inserindo os objetos no banco de dados
      await queryInterface.bulkInsert('turmas_has_professores_disciplinas', turmas_has_professores_disciplinas);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
