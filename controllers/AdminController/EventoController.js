const session = require('express-session');
const { sequelize, Evento } = require('../../models');
const { Op } = require('sequelize');

const EventoController = {
  index: async (req, res) => {
    let eventos = await Evento.findAll(
      {
        where: {data: {[Op.gte]: new Date()}},
        order: [["data", "ASC"]]
      }
    );

    res.status(200).json(eventos);

  },
  criar: async (req, res) => {

    let {data, descricao} = req.body;
    
    await Evento.create({
      data: data,
      descricao: descricao
    })

    res.status(201).redirect('/admin');

  },
  editar: async (req, res) => {
    let {id} = req.params;
    let {data, descricao} = req.body;

    let evento = await Evento.findByPk(id)

    if(!evento){
      return res.status(401).json({msg:"Não foi possivel realizar esta ação"})
    }

    let [dia, mes, ano] = data.split("/");

    await Evento.create({
      data: new Date([ano, mes, dia]),
      descricao: descricao
    })

    res.status(200).redirect("/admin");

  },
  deletar: async (req, res) => {
    let {id} = req.params;
    let evento = await Evento.findByPk(id)

    if(!evento){
      return res.status(401).json({msg:"Não foi possivel realizar esta ação"})
    }

    await Evento.destroy({where: {id: id}})

    res.status(200).json({msg: 'Evento excluído'})
  }
}

module.exports = EventoController;