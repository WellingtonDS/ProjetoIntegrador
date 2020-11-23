module.exports = (sequelize, DataTypes) => {
    const professorDisciplina = sequelize.define(
        'ProfessorDisciplina',
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
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
                through: 'turmas_has_professores_disciplinas',
                foreignKey: 'professores_disciplinas_id',
                as: 'turmas',
                timestamps: false
            }    
        )
    }

    return professorDisciplina;
}