module.exports = (sequelize, Datatypes) => {
    
    // cria o model de Usuario
    const usuario = sequelize.define(
        'Usuario',
        {
            email: Datatypes.STRING(50),
            senha: Datatypes.STRING(256),
        },
        {
            tableName: 'usuarios',
            timestamps: false
        }
    );

    return usuario;
}