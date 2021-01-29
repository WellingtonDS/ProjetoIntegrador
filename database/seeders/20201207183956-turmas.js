'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('turmas',
      [
        { serie: '1ª Série', nivel: 'Fundamental', turno: 'Matutino', ativa:1},
        { serie: '2ª Série', nivel: 'Fundamental', turno: 'Matutino', ativa:1},
        { serie: '3ª Série', nivel: 'Fundamental', turno: 'Matutino', ativa:1},
        { serie: '4ª Série', nivel: 'Fundamental', turno: 'Matutino', ativa:1},
        { serie: "5ª Série", nivel: "Fundamental", turno: "Matutino", ativa:1},
        { serie: '6ª Série', nivel: 'Fundamental', turno: 'Matutino', ativa:1},
        { serie: '7ª Série', nivel: 'Fundamental', turno: 'Matutino', ativa:1},
        { serie: '8ª Série', nivel: 'Fundamental', turno: 'Matutino', ativa:1},
        { serie: '1º Ano', nivel: 'Médio', turno: 'Matutino', ativa:1},
        { serie: '2º Ano', nivel: 'Médio', turno: 'Matutino', ativa:1},
        { serie: '3º Ano', nivel: 'Médio', turno: 'Matutino', ativa:1 }

      ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('turmas', null, {});

  }
};
