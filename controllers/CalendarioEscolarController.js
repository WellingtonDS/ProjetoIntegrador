const { sequelize, Evento } = require('../models');

const CalendarioEscolarController = {
    show: (req, res) => {
        res.render('calendarioEscolar')
    },
    buscar: async (req, res) => {
        let eventos = [];

        eventos = await Evento.findAll()
        res.json(eventos);
    }
}

module.exports = CalendarioEscolarController;