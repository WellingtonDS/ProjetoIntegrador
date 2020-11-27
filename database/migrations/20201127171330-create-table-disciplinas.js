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
      descricao: Sequelize.STRING(140)
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('disciplinas');
 
  }
};
