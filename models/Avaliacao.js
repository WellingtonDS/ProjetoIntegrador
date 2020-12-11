module.exports = (sequelize, DataTypes) => {
    const avalicacoes = sequelize.define(
        'Avaliacao',
        {
            // avaliacao_id: {
            //     type: DataTypes.INTEGER,
            //     primaryKey: true
            // },
            descricao: DataTypes.STRING,
            professores_disciplinas_id: DataTypes.INTEGER,
            data:DataTypes.DATE
        },
        {
            tableName: 'avaliacoes',
            timestamps: false
        }
    );

    return avalicacoes;
}