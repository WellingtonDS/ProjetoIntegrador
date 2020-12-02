const bcrypt = require('bcrypt');

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('usuarios', 
    [
      {email: 'ana.almeida@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'pedro.almeida@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'cesar.pinheiro@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'sergio.vieira@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'arnon.coelho@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'bernardo.coelho@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'sara.carvalho@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'ruth.miranda@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'adalton.silva@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'gleidson.silva@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'bruno.rodrigues@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'armando.santos@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'joao.vicente@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'debora.amador@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'paulo.amador@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'talita.noqueira@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'rodrigo.alves@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'daniel.gomes@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'ricardo.alves@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'leandro.vieira@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'dinei.viana@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'maria.alice@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'rebeca.linhares@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'carla.oliveira@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'felipe.silva@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'diego.viana@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'amanda.gomes@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'fabio.zardes@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'maria.silva@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'henrique.silveira@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'antonio.silva@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'paulo.silva@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'ana.queiroz@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'carla.mendes@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'eliel.silva@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'fernando.fernandez@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'celso.rodrigues@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'heitor.salvador@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'amanda.amaro@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'claudiane.saousa@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'joao.rodrigues@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'deborah.portugal@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'rebeca.santos@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'rodrigo.noqueira@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'luiza.gomes@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'karla.alves@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: 'ana.sousa@rocketschool.com.br',senha:bcrypt.hashSync('123456',10), tipo: 'A', situacao: 'A'},
      {email: "rafael.pietro@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "flavia.soares@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "sávio.sousa@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "renata.sousa@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "filipe.bernardes@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "cláudia.assis@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "amanda.carvalho@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "sergio.santos@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "ayla.farias@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "ian.souza@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "nicolas.mota@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "renan.figueiredo@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "pietro.jesus@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "helena.moura@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "eduardo.pereira@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "hugo.carvalho@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "sophia.portugal@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "daniela.rocha@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "yago.martins@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "gabriel.pereira@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "igor.pires@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "hadassa.nunes@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "adriana.pontes@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "felipe.neves@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "theo.moreira@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "pietro.drumond@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "cauã.monteiro@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "victor.mota@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "mario.andrade@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "pedro.sousa@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "saulo.morais@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "lucas.sales@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "mateus.rodrigues@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "jorge.amaro@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "sâmia.carvalho@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "italo.carvalho@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "igor.santos@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "giovane.viana@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "joão.morales@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "leonardo.araujo@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "roger.silva@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "flávio.almeida@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "celina.vieira@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "josé.morais@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "alex.monteiro@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "santiago.alves@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "vinicius.olivares@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "otton.santos@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "ravena.portugal@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "vitoria.portela@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "manoel.silva@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"},
      {email: "marcos.pontes@rocketschool.com.br",senha:bcrypt.hashSync('123456',10),tipo: "A",situacao: "A"}
    ],
    {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('usuarios', null, {});

  }
};
