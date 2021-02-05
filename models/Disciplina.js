module.exports = (sequelize, DataTypes) => {
    const disciplina = sequelize.define(
        'Disciplina',
        {
            nome: DataTypes.STRING(45),
            descricao: DataTypes.STRING(140),
            situacao: DataTypes.STRING(10)
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
                foreignKey: 'disciplina_id',
                as: 'professores',
                timestamps: false         
            });
        disciplina.hasMany(models.ProfessorDisciplina, { as: 'professoresDisciplinas', foreignKey: 'disciplina_id'})

    }

    return disciplina;
}