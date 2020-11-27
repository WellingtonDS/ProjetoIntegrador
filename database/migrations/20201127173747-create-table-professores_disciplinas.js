'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('professores_disciplinas', 
    { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      professor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'professores',
          key: 'id'
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      disciplina_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'disciplinas',
          key: 'id'
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }
    
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('professores_disciplinas');

  }
};
