const session = require('express-session');
const { sequelize, Professor, Usuario } = require('../../models');

const ProfessorController = {
  index: async (req, res) => {
    let professores = await Professor.findAll();
    res.status(200).json(professores);

  },
  detalhes: async (req, res) => {
    let {id} = req.params;
    let professor = await Professor.findByPk(id);
    res.status(200).json(professor)
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