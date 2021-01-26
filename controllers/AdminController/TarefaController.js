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
    let { data, descricao } = req.body;
    let situacao = false;
    let admin_id = 1;

    if (!data || !descricao) {
      return res.status(401).json({ erro: 'Não foi possível criar uma nova tarefa.' })
    }

    await Tarefa.create({
      data:data,
      descricao:descricao,
      situacao:situacao,
      admin_id:admin_id
    });

    res.redirect('/admin')
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
    
    res.redirect("/admin");

    // res.status(200).json(tarefas);
  }
}

module.exports = TarefaController;