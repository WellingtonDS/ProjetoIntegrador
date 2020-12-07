'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('turmas',
      [
        { serie: '1ª Série', nivel: 'Fundamental', turno: 'Matutino' },
        { serie: '2ª Série', nivel: 'Fundamental', turno: 'Matutino' },
        { serie: '3ª Série', nivel: 'Fundamental', turno: 'Matutino' },
        { serie: '4ª Série', nivel: 'Fundamental', turno: 'Matutino' },
        { serie: "5ª Série", nivel: "Fundamental", turno: "Matutino" },
        { serie: '6ª Série', nivel: 'Fundamental', turno: 'Matutino' },
        { serie: '7ª Série', nivel: 'Fundamental', turno: 'Matutino' },
        { serie: '8ª Série', nivel: 'Fundamental', turno: 'Matutino' },
        { serie: '1º Ano', nivel: 'Médio', turno: 'Matutino' },
        { serie: '2º Ano', nivel: 'Médio', turno: 'Matutino' },
        { serie: '3º Ano', nivel: 'Médio', turno: 'Matutino' }

      ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('turmas', null, {});

  }
};
