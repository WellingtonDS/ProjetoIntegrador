const session = require('express-session');
const { sequelize, Aluno, Usuario } = require('../../models');
const { Op, where } = require("sequelize");

const AlunoController = {
  index: async (req, res) => {
    let alunos = await Aluno.findAll(
      {
        include: [{association: 'turma', through: {atributes: 'matriculas'}}]
      })

    res.status(200).json(alunos);

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
    let {nome, sobrenome, telefone, usuario_id, alunoId} = req.body;
    
    await Aluno.update({
      nome:nome,
      sobrenome: sobrenome,
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