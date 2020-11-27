'use strict';

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
   await queryInterface.bulkInsert('disciplinas',
      [{nome: 'Arte ', descricao: null},
      {nome: 'Biologia', descricao: null},
      {nome: 'Ciências', descricao: null},
      {nome: 'Educação Física', descricao: null},
      {nome: 'Filosofia', descricao: null},
      {nome: 'Física', descricao: null},
      {nome: 'Geografia', descricao: null},
      {nome: 'História', descricao: null},
      {nome: 'Língua Inglesa', descricao: null},
      {nome: 'Língua Portuguesa', descricao: null},
      {nome: 'Música', descricao: null},
      {nome: 'Química', descricao: null},
      {nome: 'Sociologia', descricao: null}] 
   );
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
