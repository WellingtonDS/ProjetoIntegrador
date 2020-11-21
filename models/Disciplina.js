module.exports = (sequelize, DataTypes) => {
    const disciplina = sequelize.define(
        'Disciplina',
        {
            disciplina_id:{
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            nome: DataTypes.STRING,
            descricao: DataTypes.STRING
        },
        {
            tableName: 'disciplinas',
            timestamps: false
        }
    );

    disciplina.associate = (models) => {
        disciplina.belongsToMany(models.Professor,
            {
                through: 'professores_disciplinas', 
                foreignKey: 'professor_id',
                as: 'professores'               
            })

    }

    return disciplina;
}