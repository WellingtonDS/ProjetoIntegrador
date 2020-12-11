module.exports = (sequelize, DataTypes) => {
    const turma = sequelize.define(
        'Turma',
        {
            // turma_id: {
            //     type: DataTypes.INTEGER,
            //     primaryKey: true
            // },
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
            through: 'turmas_professores_disciplinas',
            foreignKey: 'turma_id',
            as: 'professores_disciplinas'
        });
        turma.belongsToMany(models.Aluno,
            {
                through: 'matriculas',
                foreignKey: 'turma_id',
                as: 'alunos'
            });
    }

    return turma;
}