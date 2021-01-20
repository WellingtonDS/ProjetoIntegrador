const session = require('express-session');
const { sequelize, Tarefa } = require('../../models')

const TarefaController = {
  index: async (req, res) => {
    let tarefas = await Tarefa.findAll(
      {where:{situacao: false}}
    );
    res.render('./admin/index', {admin: req.session.usuario, tarefas})
  },
  criar: async (req, res) => {
    let {data, descricao} = req.body;
  },
  editar: async (req, res) => {
    let tarefas = req.body;
    // for(var id in tarefas){
    //   Tarefa.update(
    //     {situacao: 1},{where: {id}}
    //   )
    // }
    res.send(tarefas)
  }
}

module.exports = TarefaController;