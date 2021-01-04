const {sequelize, Evento} = require('../models');
// var eventos = [];
// var eventosExtraidos = [];

// const buscarEventos = async () => {
//     eventos = await Evento.findAll();
//     for(let i=0; i < eventos.length; i++){
//         eventosExtraidos.push(eventos[i].dataValues)
//     }
//     console.log(eventosExtraidos)
//     sequelize.close()
// }

// buscarEventos();

const { QueryTypes } = require('sequelize');
const buscarEventos = async () => {
    let eventos = await sequelize.query(`SELECT * FROM eventos WHERE month(data) = ${3}`, { type: QueryTypes.SELECT});
}

buscarEventos();