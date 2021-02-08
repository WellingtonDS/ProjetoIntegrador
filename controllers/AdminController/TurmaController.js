const session = require('express-session');
const { sequelize, Turma, ProfessorDisciplina, TurmaProfessoresDisciplinas } = require('../../models');
const {Op} = require("sequelize");

const TurmaController = {
  index: async (req, res) => {
    let turmas = await Turma.findAll(
      { 
        where: {situacao: "A"},
        include: [
            {association: 'alunos', through: {atributes: 'matriculas'}},
            {association: 'professores_disciplinas', through: {atributes: 'turmas_professores_disciplinas'}, include: 'professor'}
        ]
      });
    res.status(200).json(turmas)
    // res.render('./admin/turmas', {admin: req.session.usuario, turmas});
  },
  buscar: async (req, res) => {
    let busca = req.query;
    let filtro = busca.filtro;
    let valor = busca.valor;
    let turmasFiltradas;

    switch(filtro) {
      case "serie":
        turmasFiltradas = await Turma.findAll(
          {where: { serie: {[Op.substring]: `${valor}`}}})
        break;
      case "nivel":
        turmasFiltradas = await Turma.findAll(
          {where: { nivel: {[Op.substring]: `${valor}`}}})
        break;
      case "turno":
        turmasFiltradas = await Turma.findAll(
          {where: { turno: {[Op.substring]: `${valor}`}}})
        break;
    }

    res.status(200).json(turmasFiltradas)
  },
  detalhes: async (req, res) => {
    let {id} = req.params;

    let turma = await Turma.findOne(
      {
        where: {id: id},
        include: [
          {association: 'alunos', through: {atributes: 'matriculas'}},
          {association: 'professores_disciplinas', through: {atributes: 'turmas_professores_disciplinas'}, include: 'professor'}
      ]
    });

    if(!turma){
      return res.status(401).json({erro: "Turma não encontrada"})
    }

    let professoresDisciplinas = await ProfessorDisciplina.findAll(
      {
        include: [
            "professor",
            "disciplina"
        ]
      })

    res.status(200).json({turma, professoresDisciplinas})

  },
  addProfessor: async (req, res) => {
    let {id} = req.params;
    let {professor_disciplina_id} = req.body;
    console.log(req.body);

    let buscaRegistro = await TurmaProfessoresDisciplinas.findOne(
      {
        where: {
          turma_id: id,
          professores_disciplinas_id: professor_disciplina_id
        }
      });
    
    if(buscaRegistro == undefined){
      await TurmaProfessoresDisciplinas.create({
        turma_id: id,
        professores_disciplinas_id: professor_disciplina_id,
      })
    }
    
    res.status(201).redirect('/admin');

  },
  criar: async (req, res) => {
    let { serie, nivel, turno } = req.body;

    await Turma.create({
      serie: serie,
      nivel: nivel,
      turno: turno,
      situacao: "A"
    })

    res.status(201).json({msg: "Turma criada com sucesso"})

  },
  editar: async (req, res) => {
    let { id } = req.params;
    let { serie, nivel, turno } = req.body;
    
    await Turma.update({
      serie: serie,
      nivel: nivel,
      turno: turno
    }, {where: {id:id}})

    res.redirect('/admin')

  }, 
  deletar: async (req, res) => {
    let { id } = req.params;
    let turma = await Turma.findByPk(id);

    if(!turma){
      res.status(401).json({msg: "Não foi possivel concluir esta ação"})
    }

    await Turma.update(
      {
        situacao: 'NA'
      }
      ,{where:{id: id}})
    
    res.redirect('/admin')
  }
}

module.exports = TurmaController;