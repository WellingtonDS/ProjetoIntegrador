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

    aluno.associate = (models) => {
        aluno.belongsTo(models.Usuario,{foreignKey: 'usuario_id', as:'usuario'});
        aluno.belongsToMany(models.Turma, 
            {
                through: 'matriculas',
                foreignKey: 'aluno_id',
                as: 'turma',
                timestamps: false
            })
    }

    return aluno;
}