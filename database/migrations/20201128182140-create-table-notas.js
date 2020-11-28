'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.createTable('notas', 
      { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        matricula_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          foreignKey: true,
          references: {
            model: 'matriculas',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
        avaliacao_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          foreignKey: true,
          references: {
            model: 'avaliacoes',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
        notas: {
          type: Sequelize.DECIMAL,
          allowNull:false
        }
      });

  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('notas');

  }
};
