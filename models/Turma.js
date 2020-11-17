module.exports = (sequelize, DataTypes) => {
    const turma = sequelize.define(
        'Turma',
        {
            turma_id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            serie: DataTypes.STRING(30),
            nivel: DataTypes.STRING(20),
            turno: DataTypes.STRING(10)
        },
        {
            tableName: 'turmas',
            timestamps: false
        }
    );

    return turma;
}