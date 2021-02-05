'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('turmas',
      [
        { serie: '1ª Série', nivel: 'Fundamental', turno: 'Matutino', situacao:"NA"},
        { serie: '2ª Série', nivel: 'Fundamental', turno: 'Matutino', situacao:"NA"},
        { serie: '3ª Série', nivel: 'Fundamental', turno: 'Matutino', situacao:"NA"},
        { serie: '4ª Série', nivel: 'Fundamental', turno: 'Matutino', situacao:"NA"},
        { serie: "5ª Série", nivel: "Fundamental", turno: "Matutino", situacao:"NA"},
        { serie: '6ª Série', nivel: 'Fundamental', turno: 'Matutino', situacao:"NA"},
        { serie: '7ª Série', nivel: 'Fundamental', turno: 'Matutino', situacao:"NA"},
        { serie: '8ª Série', nivel: 'Fundamental', turno: 'Matutino', situacao:"NA"},
        { serie: '1º Ano', nivel: 'Médio', turno: 'Matutino', situacao:"A"},
        { serie: '2º Ano', nivel: 'Médio', turno: 'Matutino', situacao:"A"},
        { serie: '3º Ano', nivel: 'Médio', turno: 'Matutino', situacao:"A"}

      ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('turmas', null, {});

  }
};
