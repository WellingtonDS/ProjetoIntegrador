const { sequelize, Evento } = require('../models');
const { QueryTypes } = require('sequelize');

const CalendarioEscolarController = {
    index: async (req, res) => {
        // recuperar o numero referente ao mes vindo da requisição
        let mes = Number(req.params.mes);
        let eventosDoMes = null;
        
        if(!mes){
            mes = 0;
        }
        
        // busca os eventos no banco de dados com base no parametro disponivel na requisição
        eventosDoMes = await sequelize.query(`SELECT * FROM eventos WHERE month(data) = ${mes+1}`, { type: QueryTypes.SELECT});
        
        // fazer tratamento de possiveis erros

        // envia os dados para a view
        res.status(200).send(eventosDoMes)
    }
}

module.exports = CalendarioEscolarController;