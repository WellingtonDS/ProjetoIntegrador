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
    frequencia.associate = (models) => {
        frequencia.belongsTo(models.Aula);
    }

    return frequencia;
}