module.exports = (sequelize, DataTypes) => {
    const professorDisciplina = sequelize.define(
        'ProfessorDisciplina',
        {
            professor_id: DataTypes.INTEGER,
            disciplina_id: DataTypes.INTEGER
        },
        {
            tableName: 'professores_disciplinas',
            timestamps: false
        }
    );

    professorDisciplina.associate = (models) => {
        professorDisciplina.belongsToMany(models.Turma, 
            {
                through: 'turmas_professores_disciplinas',
                foreignKey: 'professores_disciplinas_id',
                as: 'turmas',
                timestamps: false
            }    
        );
        professorDisciplina.belongsTo(models.Disciplina, {foreignKey: 'disciplina_id', as: 'disciplina'});
        professorDisciplina.belongsTo(models.Professor, {foreignKey: 'professor_id', as: 'professor'});
    }

    return professorDisciplina;
}