const session = require('express-session');
const { sequelize, Disciplina } = require('../../models');
const { Op } = require("sequelize");

const DisciplinaController = {
  index: async (req, res) => {
    let disciplinas = await Disciplina.findAll(
      {
          include: {association: 'professores', through: {atributes: 'professores_disciplinas'}}
      });

    res.status(200).json(disciplinas);
  },
  criar: async (req, res) => {
    let {disciplina, descricao} = req.body;
    let novaDisciplina = {
      disciplina,
      descricao
    }
    res.status(201).json(novaDisciplina);
  },
  detalhes: async (req, res) => {
    let {id} = req.params;
    let disciplina = await Disciplina.findOne(
      {
        where: {id: id},
        include: {association: 'professores', through: {atributes: 'professores_disciplinas'}}
      });

    res.status(200).json(disciplina);
  },
  buscar: async (req, res) => {
    let {disciplina} = req.query;

    let disciplinasFiltradas = await Disciplina.findAll(
      {where: {nome: {[Op.substring]: `${disciplina}`}}}
    )

    res.status(200).json(disciplinasFiltradas);
  },
  editar: async (req, res) => {
    let {id} = req.params;
    let {nome, descricao, professor} = req.body;
    
    let disciplina = await Disciplina.findByPk(id);
    if(!disciplina){
      return res.status(401).json({msg: "Erro ao tentar atualizar Disciplina"})
    }

    Disciplina.update({nome:nome, descricao: descricao},{where: {id: id}})
    res.redirect('/admin')
  },
  deletar: async (req, res) => {
    let {id} = req.params;
    let disciplina = await Disciplina.findByPk(id);

    if(!disciplina){
      res.status(401).json({msg:"Não foi possível concluir esta ação"})
    }

    await Disciplina.destroy({where: {id: id}})
    res.redirect('/admin')
  }
}

module.exports = DisciplinaController;