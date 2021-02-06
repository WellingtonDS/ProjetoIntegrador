module.exports = (sequelize, DataTypes) => {
    const matricula = sequelize.define(
        'Matricula',
        {
            turma_id: DataTypes.INTEGER,
            aluno_id: DataTypes.INTEGER,
            situacao: DataTypes.STRING(10)
        },
        {
            tableName: 'matriculas',
            timestamps: false
        }
    );

    return matricula;
}