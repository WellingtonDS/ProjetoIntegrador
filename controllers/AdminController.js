const session = require('express-session');
const { sequelize, Tarefa } = require('../models')

const AdminController = {
  index: async (req, res) => {
    let tarefas = await Tarefa.findAll(
      {where:{situacao: false}}
    );
    res.render('./admin/index', {admin: req.session.usuario, tarefas})
  },
  guardar: async (req, res) => {
    let tarefas = req.body;
    // for(var id in tarefas){
    //   Tarefa.update(
    //     {situacao: 1},{where: {id}}
    //   )
    // }
    res.send(tarefas)
  }
}

module.exports = AdminController;