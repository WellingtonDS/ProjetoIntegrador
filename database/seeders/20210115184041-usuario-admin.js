const bcrypt = require('bcrypt');

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('usuarios', 
      [
        {email: 'admin@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'S', situacao: 'A'}
      ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('usuarios', null, {});

  }
};
