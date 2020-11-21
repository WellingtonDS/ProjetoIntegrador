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
    
    // cria relacionamento
    professor.associate = (models) => {
        professor.belongsTo(models.Usuario, {foreignKey: 'usuario_id', as: 'usuario'});
        professor.belongsToMany(models.Disciplina,
            {
                through: 'professores_disciplinas',
                foreignKey: 'professor_id',
                as: 'disciplinas',
                timestamps: false
            })
    }

    return professor;
}