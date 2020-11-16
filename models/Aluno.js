const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const aluno = sequelize.define(
        'Aluno',
        {
            aluno_id:{
                type:DataTypes.INTEGER,
                primaryKey: true                
            },
            nome: DataTypes.STRING,
            sobrenome: DataTypes.STRING,
            responsavel: DataTypes.STRING,
            endereco: DataTypes.STRING,
            telefone: DataTypes.STRING,
            usuario_id: DataTypes.INTEGER   
        },
        {
            tableName: "alunos",
            timestamps: false
        }
    );

    return aluno
}