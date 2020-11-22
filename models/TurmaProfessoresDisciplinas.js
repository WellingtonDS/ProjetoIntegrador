module.exports = (sequelize, DataTypes) => {
    const turmaProfessoresDisciplinas = sequelize.define(
        'TurmaProfessoresDisciplinas',
        {
            turma_id: DataTypes.INTEGER,
            professores_disciplinas_id: DataTypes.INTEGER 
        },
        {   
            tableName: 'turmas_has_professores_disciplinas',
            timestamps: false
        });

    return turmaProfessoresDisciplinas;
}