module.exports = (sequelize, DataTypes) => {
    const aula = sequelize.define(
        'Aula',
        {
            aula_id:{
                type:DataTypes.INTEGER,
                primaryKey: true
            },
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

    return aula;
}