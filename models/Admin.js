module.exports = (sequelize, DataTypes) => {
  const admin = sequelize.define(
    'Admin',
    {
      nome: DataTypes.STRING(100),
      sobrenome: DataTypes.STRING(100),
      endereco: DataTypes.STRING(100),
      telefone: DataTypes.STRING(15),
      usuario_id: DataTypes.INTEGER
    },
    {
      tableName: "admin",
      timestamps: false
    }
  );

  admin.associate = (models) => {
    admin.belongsTo(models.Usuario, {foreignKey: 'usuario_id', as:'usuario'});
  }

  return admin;
}