'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('professores',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        nome: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        sobrenome: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        telefone: {
          type: Sequelize.STRING(15),
          allowNull: false,
        },
        usuario_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          foreignKey: true,
          references: {
            model: "usuarios",
            key: "id"
          },
          onDelete: "CASCADE",
          onUpdate: "CASCADE"
        }

      });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('professores');

  }
};
