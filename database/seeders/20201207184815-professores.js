'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('professores',
      [
        { nome: 'Francisca', sobrenome: 'Almeida', telefone: '(88)813216995', usuario_id: 100 },
        { nome: 'Juliana', sobrenome: 'Soares', telefone: '(88)874017824', usuario_id: 101 },
        { nome: 'Fernando', sobrenome: 'Oliveira', telefone: '(88)519021918', usuario_id: 102 },
        { nome: 'Isaura', sobrenome: 'Peixoto', telefone: '(88)453786874', usuario_id: 103 },
        { nome: 'Tyoko', sobrenome: 'Honda', telefone: '(88)810367292', usuario_id: 104 },
        { nome: 'Soraia', sobrenome: 'Talles', telefone: '(88)775341243', usuario_id: 105 },
        { nome: 'Rafael', sobrenome: 'Moura', telefone: '(88)891961492', usuario_id: 106 },
        { nome: 'Mario', sobrenome: 'Leal', telefone: '(88)680413378', usuario_id: 107 },
        { nome: 'Elizeu', sobrenome: 'Almeida', telefone: '(88)413865623', usuario_id: 108 },
        { nome: 'Carlos', sobrenome: 'Pacheco', telefone: '(86)443408044', usuario_id: 109 },
        { nome: 'Marcio', sobrenome: 'Balbino', telefone: '(12)533062249', usuario_id: 110 },
        { nome: 'Carmem', sobrenome: 'Vaz', telefone: '(88)336318388', usuario_id: 111 },
        { nome: 'Yete', sobrenome: 'Coelho', telefone: '(65)851595560', usuario_id: 112 },
        { nome: 'Cícero', sobrenome: 'Silva', telefone: '(88)327009831', usuario_id: 113 }
      ]
      , {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('professores', null, {});

  }
};
