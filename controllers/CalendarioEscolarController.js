const { sequelize, Evento } = require('../models');

const CalendarioEscolarController = {
    index: (req, res) => {
        // recuperar o numero referente ao mes 
        let mesAtual = req.params.mes;

        // buscar os eventos no banco de dados

        // fazer tratamento de possiveis erros

        // enviar os dados para a view

        res.render('calendarioEscolar');
    }
    // buscar: async (req, res) => {
    //     let eventos = [];

    //     eventos = await Evento.findAll()
    //     res.json(eventos);
    // }
}

module.exports = CalendarioEscolarController;