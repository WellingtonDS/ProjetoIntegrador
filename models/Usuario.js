module.exports = (sequelize, Datatypes) => {
    
    // cria o model de Usuario
    const usuario = sequelize.define(
        'Usuario',
        {
            email: Datatypes.STRING(50),
            senha: Datatypes.STRING(256),
            tipo: Datatypes.STRING(1),
            situacao: Datatypes.STRING(10)
        },
        {
            tableName: 'usuarios',
            timestamps: false
        }
    );

    return usuario;
}