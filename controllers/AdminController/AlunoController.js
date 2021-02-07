const session = require('express-session');
const { sequelize, Aluno, Usuario, Matricula, Turma } = require('../../models');
const { Op, where } = require("sequelize");
const bcrypt = require('bcrypt');

const AlunoController = {
  index: async (req, res) => {
    let alunos = await Aluno.findAll(
      {
        include: [{association: 'turma', through: {atributes: 'matriculas'}}]
      })

    res.status(200).json(alunos);

  },
  criar: async (req, res) => {
    let {aluno} = req.body;
    let usuarioId;
    let alunoId;

    console.log(aluno.nome)
    // cria novo usuario e recupera o id

    await Usuario.create(
      {
        email: `${aluno.nome.toLowerCase()}.${aluno.sobrenome.toLowerCase()}${aluno.turma + aluno.nome.length}@rocketschool.com.br`,
        senha: bcrypt.hashSync('123456', 10),
        tipo: "A",
        situacao: "A"
      })
      .then(novoUsuario => {
        console.log(novoUsuario.get());
        usuarioId = novoUsuario.id;
      })
      .catch(err => {
        console.log("Erro ao tentar criar novo usuário: " + err)
      })

    // insere um novo registro de aluno e recupera o id
    await Aluno.create(
      {
        nome: aluno.nome,
        sobrenome: aluno.sobrenome,
        responsavel: aluno.responsavel,
        endereco: aluno.endereco,
        telefone: aluno.telefone,
        usuario_id: usuarioId
      })
      .then(novoAluno => {
        console.log(novoAluno);
        alunoId = novoAluno.id;
      })
      .catch(err => {
        console.log("Erro ao tentar criar novo aluno: " + err)
      })

    // atribui o novo aluno a uma turma
    await Matricula.create(
      {
        turma_id: aluno.turma,
        aluno_id: alunoId,
        situacao: "A"
      })

    res.status(201).json({msg: "OK"});
  },
  detalhes: async (req, res) => {
    let {id} = req.params;
    let aluno = await Aluno.findOne(
      {
        where: {id: id},
        include: [{association: 'turma', through: {atributes: 'matriculas'}}]
      })
    res.status(200).json(aluno)
  },
  buscar: async (req, res) => {
    let {aluno} = req.query;

    let alunosFiltrados = await Aluno.findAll(
      {where: {nome: {[Op.substring]: `${aluno}`}}}
    )
    
    res.status(200).json(alunosFiltrados);

  },
  editar: async (req, res) => {
    let {id} = req.params;
    let {nome, sobrenome, responsavel, endereco, telefone, usuario_id, alunoId} = req.body;
    
    await Aluno.update({
      nome:nome,
      sobrenome: sobrenome,
      responsavel: responsavel,
      endereco: endereco,
      telefone: telefone
    }, {where: {id: id}})

    res.redirect('/admin')

  },
  deletar: async (req, res) => {
    let {id} = req.params;
    let aluno = await Aluno.findByPk(id)

    if(!aluno){
      res.status(401).json({msg:"Não foi possivel realizar esta ação"})
    }

    await Usuario.update({situacao: "NA"}, {where: {id: aluno.dataValues.usuario_id}})

    res.status(200).json({msg: "aluno excluído"})
  }
}

module.exports = AlunoController;