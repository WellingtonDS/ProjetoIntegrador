const session = require('express-session');
const { sequelize, Tarefa } = require('../../models')

const TarefaController = {
  index: async (req, res) => {
    let tarefas = await Tarefa.findAll(
      { where: { situacao: false } }
    );
    res.render('./admin/index', { admin: req.session.usuario, tarefas })
  },
  criar: async (req, res) => {
    let tarefa  = req.body;
    let situacao = false;
    let admin_id = 1;

    if (!tarefa.data || !tarefa.descricao) {
      return res.status(401).json({ erro: 'Não foi possível criar uma nova tarefa.' })
    }

    await Tarefa.create({
      data: tarefa.data,
      descricao: tarefa.descricao,
      situacao: situacao,
      admin_id: admin_id
    });

    console.log(tarefa)

    res.status(201).json(tarefa);
  },
  alterar: async (req, res) => {
    let tarefas = req.body;
    let tarefasKeys = Object.keys(tarefas).length;

    console.log(tarefas)
    if (!tarefasKeys) {
      res.status(401).json({ erro: 'Não foi possível fazer alterações.' })
    }

    for (var id in tarefas) {
      Tarefa.update(
        { situacao: "true" }, { where: { id:id } }
      )
    }
    
    res.status(201).redirect("/admin");

  }
}

module.exports = TarefaController;