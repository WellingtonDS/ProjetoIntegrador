module.exports = (sequelize, DataTypes) => {
    const disciplina = sequelize.define(
        'Disciplina',
        {
            disciplina_id:{
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            nome: DataTypes.STRING,
            descricao: DataTypes.STRING
        },
        {
            tableName: 'disciplinas',
            timestamps: false
        }
    );

    return disciplina;
}