'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('aulas',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        descricao: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        data: {
          type: Sequelize.DATE,
          allowNull: false
        },
        turma_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          foreignKey: true,
          references: {
            model: 'turmas',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
        professores_disciplinas_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          foreignKey: true,
          references: {
            model: 'professores_disciplinas',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
        situacao: {
          type: Sequelize.STRING(10),
          defaultValue: false,
          allowNull: false
        }

      });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('aulas');

  }
};
