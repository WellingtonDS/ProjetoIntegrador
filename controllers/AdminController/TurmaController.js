const session = require('express-session');
const { sequelize, Turma } = require('../../models');

const TurmaController = {
  show: async (req, res) => {
    let turmas = await Turma.findAll();
    res.status(200).json(turmas)
    // res.render('./admin/turmas', {admin: req.session.usuario, turmas});
  },
  detalhes: async (req, res) => {
    let {id} = req.params;
    let turma = await Turma.findOne({where: {id:id}});

    if(!turma){
      return res.status(401).json({erro: "Turma não encontrada"})
    }

    res.status(200).json(turma)

  },
  criar: async (req, res) => {
    let { serie, nivel, turno } = req.body;
    
    let turma = {
      serie,
      nivel,
      turno
    }
    res.status(200).json(turma)
  },
  editar: async (req, res) => {
    let { id } = req.params;
    let { serie, nivel, turno } = req.body;
    await Turma.update({
      serie: serie,
      nivel: nivel,
      turno: turno
    }, {where: {id:id}})

    res.redirect('/admin')

  }
}

module.exports = TurmaController;