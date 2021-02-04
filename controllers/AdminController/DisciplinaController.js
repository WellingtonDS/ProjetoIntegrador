const session = require('express-session');
const { sequelize, Disciplina } = require('../../models');

const DisciplinaController = {
  index: async (req, res) => {
    let disciplinas = await Disciplina.findAll(
      {
          include: {association: 'professores', through: {atributes: 'professores_disciplinas'}}
      });

    res.status(200).json(disciplinas);
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