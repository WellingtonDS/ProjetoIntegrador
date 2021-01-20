const { Admin, Tarefa, sequelize } = require('../models');

Tarefa.findAll({include: 'admin'})
.then(tarefas => {
  console.log(tarefas[0].admin)
})
