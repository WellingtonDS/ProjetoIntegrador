'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tarefas', 
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
        type: Sequelize.STRING(140),
        allowNull: false
      },
      situacao: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      admin_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
          model: "admin",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }
    });
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('tarefas');
  
  }
};
