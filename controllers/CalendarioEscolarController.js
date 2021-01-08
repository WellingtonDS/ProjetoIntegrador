const { sequelize, Evento } = require('../models');
const { QueryTypes } = require('sequelize');

const CalendarioEscolarController = {
    index: async (req, res) => {
        // recupera o numero referente ao mes vindo da requisição
        let diaMes = Number(req.params.mes);
        let mes = null;
        let eventosDoMes = null;
        let meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
        
        // verica se diaMes é undefined
        if(!diaMes){
            diaMes = 0;
            mes = meses[diaMes];
        }

        mes = meses[diaMes]
        
        // busca os eventos no banco de dados com base no parametro disponivel na requisição
        eventosDoMes = await sequelize.query(`SELECT * FROM eventos WHERE month(data) = ${diaMes+1}`, { type: QueryTypes.SELECT});

        // envia os dados para a view
        res.render("calendarioEscolar",{eventosDoMes, diaMes, mes})
    }
}

module.exports = CalendarioEscolarController;