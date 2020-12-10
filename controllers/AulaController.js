const session = require("express-session");
const {sequelize, Aluno, Matricula, Turma, ProfessorDisciplina, Disciplina, Aula, Frequencia} = require('../models');

const AulaController = {
    registro: async (req, res) => {
        let professor = req.session.usuario;
        let {turma_id, professor_disciplina_id} = req.params;

        // busca por turma
        let turma = await Turma.findByPk(turma_id);
        
        // busca professor_disciplina
        let professorDisciplina = await ProfessorDisciplina.findByPk(professor_disciplina_id, 
            {include: 'disciplina'});

        res.render('./professor/aulas/registro', {professor, turma, professorDisciplina});
    },
    registrarAula: async (req, res) => {
        let professor = req.session.usuario
        let {turma_id, professor_disciplina_id} = req.params;
        let {data, descricao} = req.body;

        //insere o registro de aula no banco
        let aula = await Aula.create({
            data:data,
            descricao: descricao,
            turma_id: turma_id,
            professores_disciplinas_id: professor_disciplina_id,

        });

        res.redirect(`/professor/aulas/${aula.id}/frequencia`);
        
    },
    registroFrequencia: async (req, res) => {
        let professor = req.session.usuario;
        let {aula_id} = req.params;
        // 
        let aula = await Aula.findByPk(aula_id, {
            include: [{
                model: Turma,
                as: 'turma'
            },
            {
                model: ProfessorDisciplina,
                as: 'professor_disciplina',
                include: [{
                    model: Disciplina,
                    as: 'disciplina'
                }]
            }
        ]
        
        });

        //busca alunos no banco de dados
        let alunos = await Aluno.findAll({include: [{
            model: Matricula,
            as: 'matricula',
            where:{turma_id: aula.turma_id}
        }]});

        res.render('./professor/aulas/frequencia', {aula, alunos, professor})
    },
    registrarFrequencia: async (req, res) => {
        let {frequencia} = req.body;
        let {aula_id} = req.params;
        // seleciona frequencia de alunos presentes
        let frequencias = frequencia.filter(freq => {
            return freq.frequencia == 'presente';
        });

        // cria o objeto frequencia
        frequencias.forEach( async freq => {
            // insere o registro de frequencia no banco de dados
            await Frequencia.create({
                aula_id: aula_id,
                aluno_id: freq.aluno_id
            })

        });

        res.redirect('/professor/aulas/sucesso');

    },
    sucesso: (req, res) => {
        let professor = req.session.usuario;
        res.render('./professor/aulas/sucesso', {professor})
    }
}

module.exports = AulaController;