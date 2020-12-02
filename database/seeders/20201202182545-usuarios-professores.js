const bcrypt = require('bcrypt');

'use strict';

// insere no BD usuarios do tipo professor
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usuarios', 
    [
      {email: 'francisca.almeida@rocketschool.com.br',senha: bcrypt.hashSync('123a75',10), tipo: 'P', situacao: 'A'},
      {email: 'juliana.soares@rocketschool.com.br',senha: bcrypt.hashSync('123a75',10), tipo: 'P', situacao: 'A'},
      {email: 'fernando.oliveira@rocketschool.com.br',senha: bcrypt.hashSync('123a75',10), tipo: 'P', situacao: 'A'},
      {email: 'isaura.peixoto@rocketschool.com.br',senha: bcrypt.hashSync('123a75',10), tipo: 'P', situacao: 'A'},
      {email: 'tyoko.honda@rocketschool.com.br',senha: bcrypt.hashSync('123a75',10), tipo: 'P', situacao: 'A'},
      {email: 'soraia.talles@rocketschool.com.br',senha: bcrypt.hashSync('123a75',10), tipo: 'P', situacao: 'A'},
      {email: 'rafael.moura@rocketschool.com.br',senha: bcrypt.hashSync('123a75',10), tipo: 'P', situacao: 'A'},
      {email: 'mario.leal@rocketschool.com.br',senha: bcrypt.hashSync('123a75',10), tipo: 'P', situacao: 'A'},
      {email: 'elizeu.almeida@rocketschool.com.br',senha: bcrypt.hashSync('123a75',10), tipo: 'P', situacao: 'A'},
      {email: 'carlos.pacheco@rocketschool.com.br',senha: bcrypt.hashSync('123a75',10), tipo: 'P', situacao: 'A'},
      {email: 'marcio.balbino@rocketschool.com.br',senha: bcrypt.hashSync('123a75',10), tipo: 'P', situacao: 'A'},
      {email: 'carmem.vaz@rocketschool.com.br',senha: bcrypt.hashSync('123a75',10), tipo: 'P', situacao: 'A'},
      {email: 'yete.coelho@rocketschool.com.br',senha: bcrypt.hashSync('123a75',10), tipo: 'P', situacao: 'A'},
      {email: 'cicero.silva@rocketschool.com.br',senha: bcrypt.hashSync('123a75',10), tipo: 'P', situacao: 'A'}
    ],
    {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('usuarios', null, {});

  }
};
