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

    return professorDisciplina;
}