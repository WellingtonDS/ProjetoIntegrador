module.exports = (sequelize, DataTypes) => {
    const nota = sequelize.define(
        'Nota',
        {
            nota_id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            matricula_id: DataTypes.INTEGER,
            nota: DataTypes.DECIMAL,
            avaliacao_id: DataTypes.INTEGER
        },
        {
            tableName: 'notas',
            timestamps: false
        }
    );

    return nota;
}