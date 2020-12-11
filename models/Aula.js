module.exports = (sequelize, DataTypes) => {
    const aula = sequelize.define(
        'Aula',
        {
            // aula_id:{
            //     type:DataTypes.INTEGER,
            //     primaryKey: true
            // },
            descricao:DataTypes.STRING,
            data: DataTypes.DATE,
            turma_id: DataTypes.INTEGER,
            professores_disciplinas_id: DataTypes.INTEGER
        },
        {
            tableName: 'aulas',
            timestamps: false
        }
    );

    aula.associate = (models) => {
        aula.belongsTo(models.Turma, {foreignKey:'turma_id', as: 'turma'});
        aula.belongsTo(models.ProfessorDisciplina, {foreignKey: 'professores_disciplinas_id', as: 'professor_disciplina'});
        aula.hasMany(models.Frequencia, { as: 'frequencia'})
    }

    return aula;
}