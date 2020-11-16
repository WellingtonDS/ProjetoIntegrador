const { sequelize, Sequelize } = require("../models");

module.exports = (sequelize, DataTypes) => {
    const professor = sequelize.define(
        'Professor',
        {
            nome: DataTypes.STRING,
            sobrenome: DataTypes.STRING,
            email: DataTypes.STRING(100),
            telefone: DataTypes.STRING(15),
            usuario_id: DataTypes.INTEGER
        },
        {
            tableName: "professores",
            timestamps: false
        }
        
    );

    return professor;
}