const session = require('express-session');
const { sequelize, Aluno, Usuario } = require('../../models');

const AlunoController = {
  index: async (req, res) => {
    let alunos = await Aluno.findAll();
    res.status(200).json(alunos);

  },
  detalhes: async (req, res) => {
    let {id} = req.params;
    let aluno = await Aluno.findByPk(id);
    res.status(200).json(aluno)
  },
  editar: async (req, res) => {
    let {id} = req.params;
    let {nome, sobrenome, telefone, usuario_id, alunoId} = req.body;
    
    await Aluno.update({
      nome:nome,
      sobrenome: sobrenome,
      telefone: telefone
    }, {where: {id: id}})

    res.redirect('/admin')

  },
  deletar: async (req, res) => {
    let {id} = req.params;
    let aluno = await Aluno.findByPk(id)

    if(!aluno){
      res.status(401).json({msg:"Não foi possivel realizar esta ação"})
    }

    await Usuario.update({situacao: "NA"}, {where: {id: aluno.dataValues.usuario_id}})

    res.status(200).json({msg: "aluno excluído"})
  }
}

module.exports = AlunoController;