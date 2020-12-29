'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('eventos',
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      }, 
      data: {
        type: Sequelize.DATE,
        allowNull: false
      },
      descricao: {
        type: Sequelize.TEXT,
        allowNull: false
      }

    });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('eventos');

  }
};
