module.exports = (sequelize, DataTypes) => {
    const frequencia = sequelize.define(
        'Frequencia',
        {
            aula_id: DataTypes.INTEGER,
            aluno_id: DataTypes.INTEGER
        },
        {
            tableName: 'frequencias',
            timestamps: false
        }
    );

    return frequencia;
}