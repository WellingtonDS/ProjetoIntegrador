'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('avaliacoes', 
      { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        descricao: {
          type: Sequelize.STRING(140),
          allowNull: false
        },
        turmas_professores_disciplinas_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          foreignKey: true,
          references: {
            model: 'turmas_professores_disciplinas',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        }
      });

  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.dropTable('avaliacoes');

  }
};
