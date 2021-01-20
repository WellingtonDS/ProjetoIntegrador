module.exports = (sequelize, DataTypes) => {
  const tarefas = sequelize.define(
    'Tarefa',
    {
      data: DataTypes.DATE,
      descricao: DataTypes.STRING,
      situacao: DataTypes.BOOLEAN,
      admin_id: DataTypes.INTEGER
    },
    {
      tableName: "tarefas",
      timestamps: false
    }
  )

  tarefas.associate = (models) => {
    tarefas.belongsTo(models.Admin, {foreignKey: 'admin_id', as: 'admin'})
  }

  return tarefas;
}