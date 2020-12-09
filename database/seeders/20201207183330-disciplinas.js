'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    await queryInterface.bulkInsert('disciplinas',
      [
        { nome: 'Arte ', descricao: null },
        { nome: 'Biologia', descricao: null },
        { nome: 'Ciências', descricao: null },
        { nome: 'Educação Física', descricao: null },
        { nome: 'Filosofia', descricao: null },
        { nome: 'Física', descricao: null },
        { nome: 'Geografia', descricao: null },
        { nome: 'istória', descricao: null },
        { nome: 'Língua Inglesa', descricao: null },
        { nome: 'Língua Portuguesa', descricao: null },
        { nome: 'Matemática', descricao: null },
        { nome: 'Química', descricao: null },
        { nome: 'Sociologia', descricao: null },
        { nome: 'Música', descricao: null },
      ]
      , {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('disciplinas', null, {});

  }
};
