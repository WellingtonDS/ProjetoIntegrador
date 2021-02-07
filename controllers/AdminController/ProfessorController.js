const session = require('express-session');
const { sequelize, Professor, Usuario, ProfessorDisciplina } = require('../../models');
const { Op } = require("sequelize");
const bcrypt = require('bcrypt');

const ProfessorController = {
  index: async (req, res) => {
    let professores = await Professor.findAll(
      { 
        include: [{association: 'disciplinas', through:{atributes: 'professores_disciplinas'}}, 'usuario']
      });
    res.status(200).json(professores);

  },
  criar: async (req, res) => {
    let {nome, sobrenome, telefone, disciplina, turma} = req.body;
    let usuarioId;
    let professorId;
    let professorDisciplinaId;

    // cria um novo usuario do tipo professor
    await Usuario.create(
      {
        email: `${nome.toLowerCase()}.${sobrenome.toLowerCase()}${disciplina + nome.length}@rocketschool.com.br`,
        senha: bcrypt.hashSync('123456', 10),
        tipo: "P",
        situacao: "A"
      })
      .then(novoUsuario => {
        console.log(novoUsuario.get());
        usuarioId = novoUsuario.id;
      })
      .catch(err => {
        console.log("Erro ao tentar criar novo usuário: " + err)
      })
      
    // insere um novo registro de professor
    await Professor.create(
      {
        nome: nome,
        sobrenome: sobrenome,
        telefone: telefone,
        usuario_id: usuarioId
      })
      .then(novoProfessor => {
        console.log(novoProfessor);
        professorId = novoProfessor.id;
      })
      .catch(err => {
        console.log("Erro ao tentar criar novo professor: " + err)
      })

    // atribui um professor a uma disciplina
    await ProfessorDisciplina.create(
      {
        professor_id: professorId,
        disciplina_id: disciplina
      })
      .then(novoProfessorDisciplina => {
        console.log(novoProfessorDisciplina);
        professorDisciplinaId = novoProfessorDisciplina.id;
      })
      .catch(err => {
        console.log("Erro ao tentar criar novo professor: " + err)
      })
    
    // cadastrar o professorDisciplina a uma turma
    
    res.status(201).json({msg: "OK"})
  },
  detalhes: async (req, res) => {
    let {id} = req.params;
    let professor = await Professor.findOne(
      { 
        where: {id: id},
        include: [{association: 'disciplinas', through:{atributes: 'professores_disciplinas'}}, 'usuario']
      });
    res.status(200).json(professor)
  },
  buscar: async (req, res) => {
    let {professor} = req.query;
    
    let professoresFiltrados = await Professor.findAll(
      {where: {nome: {[Op.substring]: `${professor}`}}}
    );
    
    res.status(200).json(professoresFiltrados);
  },
  editar: async (req, res) => {
    let {id} = req.params;
    let {nome, sobrenome, telefone, usuario_id, professorId} = req.body;
    
    await Professor.update({
      nome:nome,
      sobrenome: sobrenome,
      telefone: telefone
    }, {where: {id: id}})

    res.redirect('/admin')

  },
  deletar: async (req, res) => {
    let {id} = req.params;
    let professor = await Professor.findByPk(id)

    if(!professor){
      res.status(401).json({msg:"Não foi possivel realizar esta ação"})
    }

    await Usuario.update({situacao: "NA"}, {where: {id: professor.dataValues.usuario_id}})

    res.status(200).json({msg: "Professor excluído"})
  }
}

module.exports = ProfessorController;