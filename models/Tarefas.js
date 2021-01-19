const { Sequelize } = require("sequelize/types")

module.exports = (sequelize, DataTypes) => {
  const tarefas = sequelize.define(
    'Tarefa',
    {
      data: DataTypes.DATE,
      descricao: DataTypes.STRING,
      situacao: DataTypes.BOOLEAN,
      usuario_id: DataTypes.INTEGER,
    },
    {
      tableName: "tarefas",
      timestamps: false
    }
  )
}