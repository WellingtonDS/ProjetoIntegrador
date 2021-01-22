'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('admin', 
    [
      { nome: 'Helen', sobrenome: 'Miranda', endereco: 'Rua 12 de Março', telefone: "(86)25116412", usuario_id: 114 }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('admin', null, {});
  }
};
