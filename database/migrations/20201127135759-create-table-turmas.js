'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('turmas', 
        { 
          id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
          },
          serie: {
            type: Sequelize.STRING(30),
            allowNull: false,
          },
          nivel: {
            type: Sequelize.STRING(20),
            allowNull: false,
          },
          turno: {
            type: Sequelize.STRING(10),
            allowNull: false,
          }
        });

  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('turmas');

  }
};
