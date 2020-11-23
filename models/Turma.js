module.exports = (sequelize, DataTypes) => {
    const turma = sequelize.define(
        'Turma',
        {
            turma_id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            serie: DataTypes.STRING(30),
            nivel: DataTypes.STRING(20),
            turno: DataTypes.STRING(10)
        },
        {
            tableName: 'turmas',
            timestamps: false
        }
    );

    turma.associate = (models) => {
        turma.belongsToMany(models.ProfessorDisciplina, {
            through: 'turmas_has_professores_disciplinas',
            foreignKey: 'turma_id',
            as: 'turmas_professores_disciplinas'
        })
    }

    return turma;
}