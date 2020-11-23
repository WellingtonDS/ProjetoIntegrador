'use strict';
const {sequelize, Aluno, Matricula, Turma} = require('../../models')

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
      });

      // seleciona alunos
      let alunos = [];
      for(let i=70; i < 100; i++){
          alunos.push(await Aluno.findByPk(i));
      }

      let matriculas = []
      let indice = 0;
      // criando os objetos de matriculas
      // para cada matricula será criado um objeto
      for(let i=0;i < turmas.length; i++){
          for(let j=indice; j < (10+indice); j++ ){
              matriculas.push({
                  turma_id: turmas[i].dataValues.turma_id,
                  aluno_id: alunos[j].dataValues.aluno_id,
                  situacao: 'A'
              })
              
          }
          indice += 10;   
      }

      // inserindo os registros no banco de dados
      await queryInterface.bulkInsert('matriculas', matriculas);
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
