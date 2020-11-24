const session = require("express-session");
const {sequelize, Aluno, Matricula, Turma, ProfessorDisciplina, Aula, Frequencia} = require('../models');

const AulaController = {
    registro: async (req, res) => {
        let professor = req.session.usuario
        let {turma_id, professor_disciplina_id} = req.params;

        // busca por turma
        let turma = await Turma.findByPk(turma_id);
        //busca alunos
        let alunos = await Aluno.findAll({include: [{
            model: Matricula,
            as: 'matricula',

            where:{turma_id}
        }]});
        // busca professor_disciplina
        let professorDisciplina = await ProfessorDisciplina.findByPk(professor_disciplina_id, 
            {include: 'disciplina'});
        res.render('./professor/aulas/registro', {professor, turma, professorDisciplina, alunos});
    },
    registrar: async (req, res) => {
        let {turma_id, professor_disciplina_id} = req.params;
        let {data, descricao, frequencia} = req.body;
        
        // seleciona frequencia de alunos presentes
        let frequencias = frequencia.filter(freq => {
            return freq.frequencia == 'presente';
        });

        // forma para objeto frequencia
        let frequenciasAlunos = [];
        frequencias.forEach(freq => {
            frequenciasAlunos.push({
                aluno_id: freq.aluno_id
            })
        })

        // insere o registro de aula no banco
        let aula = await Aula.create({
            data: data,
            descricao: descricao,
            turma_id: turma_id,
            professores_disciplinas_id: professor_disciplina_id,

        });

        res.json(aula);
        
    }
}

module.exports = AulaController;