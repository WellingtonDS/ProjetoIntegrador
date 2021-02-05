'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('disciplinas', 
    { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      situacao: {
        type: Sequelize.STRING(10),
        allowNull: false
      }
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('disciplinas');
 
  }
};
