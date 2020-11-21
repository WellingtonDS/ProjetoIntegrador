// importando as configurações do sequelize
const Sequelize = require("sequelize");
const dbConfig = require("../config/config.json").development;

// criando a conexão com banco
const conexao = new Sequelize(dbConfig, {define: {
    timestamps: false
}});

module.exports = conexao;
