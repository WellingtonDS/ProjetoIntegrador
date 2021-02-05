'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    await queryInterface.bulkInsert('disciplinas',
      [
        { nome: 'Arte ', descricao: 'Estudo das manifestações de ordem estética ou comunicativa.', situacao: 'A'},
        { nome: 'Biologia', descricao: 'Estudo da vida nas suas mais variadas formas e níveis', situacao: 'A'},
        { nome: 'Ciências', descricao: 'Estudo racionaal do Universo, direcionados à descoberta de fatos.', situacao: 'A'},
        { nome: 'Educação Física', descricao: 'Promover a saúde dos indivíduos através da prática de atividades físicas.', situacao: 'A'},
        { nome: 'Filosofia', descricao: 'Campo do conhecimento que estuda a existência humana e o saber por meio da análise racional.', situacao: 'A'},
        { nome: 'Física', descricao: 'Ciência voltada ao estudo dos fenômenos naturais, baseando-se em teorias e por meio da observação e experimentação.', situacao: 'A'},
        { nome: 'Geografia', descricao: 'Ciência cujo objeto de estudo é o espaço geográfico, onde são estabelecidas as relações humanas.', situacao: 'A'},
        { nome: 'História', descricao: 'Ciência que estuda o ser humano e sua ação no tempo e no espaço concomitantemente à análise de processos e eventos ocorridos no passado.', situacao: 'A'},
        { nome: 'Língua Inglesa', descricao: 'O ensino de língua estrangeira como um código de diferentes estruturas lingüísticas, com ênfase na oralidade, leitura e escrita.', situacao: 'A'},
        { nome: 'Língua Portuguesa', descricao: 'Estudo da morfologia, sintaxe e semântica das palavras', situacao: 'A'},
        { nome: 'Matemática', descricao: 'É a ciência que estuda as quantidades, o espaço, as relações abstratas e lógicas aplicadas aos símbolos.', situacao: 'A'},
        { nome: 'Química', descricao: 'Ciência que estuda a composição, estrutura, propriedades da matéria, as mudanças sofridas por ela durante as reações químicas.', situacao: 'A'},
        { nome: 'Sociologia', descricao: 'Estudo da sociedade, padrões de relações sociais, interação social e cultura da vida cotidiana.', situacao: 'A'},
        { nome: 'Música', descricao: 'A Arte de combinar o som e o silêncio', situacao: 'A'},
      ]
      , {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('disciplinas', null, {});

  }
};
