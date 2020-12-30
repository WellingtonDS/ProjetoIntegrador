'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('eventos', [
      {data:"2021-01-01", descricao: "Confraternização universal."},
      {data:"2021-01-03", descricao: "Término do Recesso de Natal e de Ano Novo."},
      {data:"2021-01-04", descricao: "Divulgação do número de vagas disponíveis."},
      {data:"2021-01-11", descricao: "Data limite para divulgação das vagas remanescentes."},
      {data:"2021-01-13", descricao: "Início do período de matrícula. Semestre letivo: 2021.1."},
      {data:"2021-01-19", descricao: "Feriado municipal."},
      {data:"2021-01-20", descricao: "Período de solicitação para ingresso via teste de aptidão. Semestre letivo: 2021.1."},
      {data:"2021-01-25", descricao: "Divulgação da lista aprovados nos testes de aptidão. Semestre letivo: 2021.1."},
      {data:"2021-02-01", descricao: "Início do semestre letivo."},
      {data:"2021-02-01", descricao: "Aula inaugural."},
      {data:"2021-02-05", descricao: "1ª Reunião de Pais e alunos."},
      {data:"2021-02-09", descricao: "Inauguração do Laboratório de Informática."},
      {data:"2021-02-15", descricao: "Feriado: Carnaval."},
      {data:"2021-02-17", descricao: "Recesso escolar: Cinzas."},
      {data:"2021-03-01", descricao: "Início do período de matrícula para o 2º Concurso de Ciências."},
      {data:"2021-03-11", descricao: "Divulgação dos trabalhos correntes ano 2º Concurso de Ciências."},
      {data:"2021-03-15", descricao: "Divulgação dos orientadores que irão acompanhar o desenvolvimento dos trabalhos."},
      {data:"2021-03-23", descricao: "Início do perído de provas referente ao primeiro bimestre."},
      {data:"2021-03-31", descricao: "Fim do período de provas"}
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('eventos', null, {});

  }
};
