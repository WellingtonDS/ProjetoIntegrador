module.exports = (sequelize, DataTypes) => {
    const evento = sequelize.define(
        "Evento",
        {
            data: {
                type: DataTypes.DATE,
                allowNull: false
            },
            descricao: {
                type: DataTypes.TEXT,
                allowNull: false
            }
        },
        {
            tableName: "eventos",
            timestamps: false
        }
        
    );

    return evento
}