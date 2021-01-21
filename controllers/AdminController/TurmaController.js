const session = require('express-session');
const { sequelize, Turma } = require('../../models');

const TurmaController = {
  show: (req, res) => {
    res.render('./admin/forms/form-turmas', {admin: req.session.usuario});
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