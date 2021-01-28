const session = require('express-session');
const { sequelize, Turma } = require('../../models');

const TurmaController = {
  show: async (req, res) => {
    let turmas = await Turma.findAll();
    res.status(200).json(turmas)
    // res.render('./admin/turmas', {admin: req.session.usuario, turmas});
  },
  criar: async (req, res) => {
    let { serie, nivel, turno } = req.body;
    
    let turma = {
      serie,
      nivel,
      turno
    }

    res.status(200).json(turma)
  }
}

module.exports = TurmaController;