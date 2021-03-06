module.exports = (sequelize, DataTypes) => {
    const turmaProfessoresDisciplinas = sequelize.define(
        'TurmaProfessoresDisciplinas',
        {
            turma_id: DataTypes.INTEGER,
            professores_disciplinas_id: DataTypes.INTEGER 
        },
        {   
            tableName: 'turmas_professores_disciplinas',
            timestamps: false
        });
    
    turmaProfessoresDisciplinas.associate = (models) => {
        turmaProfessoresDisciplinas.belongsTo(models.Turma, {foreignKey: 'turma_id', as: 'turma'})
    }

    return turmaProfessoresDisciplinas;
}