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
    
    return professorDisciplina;
}