module.exports = (sequelize, DataTypes) => {
    const aluno = sequelize.define(
        'Aluno',
        {
            // aluno_id:{
            //     type:DataTypes.INTEGER,
            //     primaryKey: true                
            // },
            nome: DataTypes.STRING(100),
            sobrenome: DataTypes.STRING(100),
            responsavel: DataTypes.STRING(100),
            endereco: DataTypes.STRING(100),
            telefone: DataTypes.STRING(15),
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
            });
        aluno.hasMany(models.Matricula, {as:'matricula', foreignKey:'aluno_id'});
    }

    return aluno;
}