const session = require("express-session");
const {sequelize, Aluno, Matricula, Professor, Turma, TurmaProfessoresDisciplinas, ProfessorDisciplina, Disciplina, Aula, Frequencia} = require('../models');

const AulaController = {
    index: async (req, res) => {
        // let professor = req.session.usuario;

        // let professorDisciplinaId;
        // await ProfessorDisciplina.findOne(
        // {
        //     where: {professor_id: professor.id}
        // })
        // .then(resultado => {
        //     professorDisciplinaId = resultado.id;
        // })

        // let aulas = await Aula.findAll(
        //     {
        //         where: {professores_disciplinas_id: professorDisciplinaId, situacao: false},
        //         include: [{association: 'disciplinas', through:{atributes: 'professores_disciplinas'}}, 'turma']
        //     })
        
        // res.render('./professor/index', {professor, aulas})
    },
    registro: async (req, res) => {
        let professor = req.session.usuario;
        let {turma_id, professor_disciplina_id} = req.params;

        let professorDisciplina = await ProfessorDisciplina.findOne(
        {
            where: {professor_id: professor.id},
            include: 'disciplina'
        })

        let aulas = await Aula.findAll(
        {
            where: {professores_disciplinas_id: professorDisciplina.id, situacao: false},
            include: 'turma'
        })

        res.render('./professor/aulas/frequencia', {professor, aulas, professorDisciplina});
    },
    criacao: async (req, res) => {
        let professor = req.session.usuario;

        let professorDisciplinaId;
        await ProfessorDisciplina.findOne(
        {
            where: {professor_id: professor.id}
        })
        .then(resultado => {
            professorDisciplinaId = resultado.id;
        })

        let turmas = await TurmaProfessoresDisciplinas.findAll(
            {
                where: {professores_disciplinas_id: professorDisciplinaId},
                include: 'turma'
            });

        res.status(200).render('./professor/aulas/formularioNovaAula', {turmas, professor, professorDisciplinaId})
    },
    criar: async (req, res) => {
        let professor = req.session.usuario
        let {turma, data, descricao, professorDisciplinaId} = req.body;

        let aula = await Aula.create({
            descricao: descricao,
            data:data,
            turma_id: turma,
            professores_disciplinas_id: professorDisciplinaId,
            situacao: false
        });

        res.status(201).render('./professor/aulas/sucesso', {professor})
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

        await Aula.update({situacao: true}, {where: {id: aula_id}})

        res.redirect('/professor/aulas/sucesso');

    },
    sucesso: (req, res) => {
        let professor = req.session.usuario;
        res.render('./professor/aulas/sucesso', {professor})
    }
}

module.exports = AulaController;