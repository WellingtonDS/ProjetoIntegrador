'use strict';
const {sequelize, Turma, TurmaProfessoresDisciplinas, ProfessorDisciplina} = require('../../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {

      // seleciona turmas
      let turmas = await Turma.findAll({
        where:{
          nivel: 'Médio'
        }
      })
      
      // seleciona ProfessoresDisciplinas
      let professoresDisciplinas = await ProfessorDisciplina.findAll();
      // instancia array para inserção de objetos de turmas_has...
      let turmas_professores_disciplinas = [];

      // criando os objetos de turmas_has...
      // para cada turma será criado a quantidade de objetos que contem professoreDisciplinas
      for(let i=0; i < turmas.length; i++){ 
        for(let j=0; j < professoresDisciplinas.length; j++){
          turmas_professores_disciplinas.push({
            turma_id: turmas[i].dataValues.id,
            professores_disciplinas_id: professoresDisciplinas[j].dataValues.id
          })

        }
        
      }

      // inserindo os objetos no banco de dados
      await queryInterface.bulkInsert('turmas_professores_disciplinas', turmas_professores_disciplinas);
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('turmas_professores_disciplinas', null, {});
    
  }
};
