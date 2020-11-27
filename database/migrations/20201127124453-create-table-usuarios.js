'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.createTable('usuarios', 
      { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        email: {
          type: Sequelize.STRING(50),
          allowNull: false,
          unique: true
        },
        senha: {
          type: Sequelize.STRING(256),
          allowNull: false,
        },
        tipo: {
          type: Sequelize.STRING(1),
          allowNull: false,
        },
        situacao: {
          type: Sequelize.STRING(10),
          allowNull: false,
        }
         
      });
    
  },

  down: async (queryInterface, Sequelize) => {
  
     await queryInterface.dropTable('usuarios');
    
  }
};
