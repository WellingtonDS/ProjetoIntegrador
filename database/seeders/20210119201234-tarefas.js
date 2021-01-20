'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tarefas', [
      {data: "2021-01-15", descricao: "Cadastrar novas turmas", situacao: 0, admin_id: 1},
      {data: "2021-01-15", descricao: "Cadastrar disciplinas", situacao: 0, admin_id: 1},
      {data: "2021-01-15", descricao: "Ligar para pais de de alunos", situacao: 0, admin_id: 1},
      {data: "2021-01-15", descricao: "Revisar endereços", situacao: 0, admin_id: 1},
      {data: "2021-01-15", descricao: "Fazer relatório de turmas", situacao: 0, admin_id: 1},
      {data: "2021-01-15", descricao: "Matricular alunos", situacao: 0, admin_id: 1},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tarefas', null, {});
  }
};
