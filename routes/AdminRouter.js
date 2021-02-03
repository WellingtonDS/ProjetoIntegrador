const express = require('express');
const router = express.Router();
const TarefaController = require('../controllers/AdminController/TarefaController');
const TurmaController = require('../controllers/AdminController/TurmaController');
const DisciplinaController = require('../controllers/AdminController/DisciplinaController');
const ProfessorController = require('../controllers/AdminController/ProfessorController');
const AlunoController = require('../controllers/AdminController/AlunoController');
const EventoController = require('../controllers/AdminController/EventoController');
const {check, validationResult, body} = require('express-validator');
const validarSession = require('../middlewares/auth');

// rotas para tarefa
router.get('/', validarSession, TarefaController.index);
router.post('/tarefas/criar', validarSession, TarefaController.criar);
router.put('/tarefas/alterar', validarSession, TarefaController.alterar);

// rotas para turma
router.get('/turmas', validarSession, TurmaController.index);
router.get('/turmas/:id/detalhes', validarSession, TurmaController.detalhes);
router.post('/turmas/criar', validarSession, TurmaController.criar);
router.put('/turmas/:id/editar', validarSession, TurmaController.editar);
router.delete('/turmas/:id/deletar', validarSession, TurmaController.deletar);

// rotas para disciplina
router.get('/disciplinas', validarSession, DisciplinaController.index);
router.get('/disciplinas/:id/detalhes', validarSession, DisciplinaController.detalhes);
router.put('/disciplinas/:id/editar', validarSession, DisciplinaController.editar);
router.delete('/disciplinas/:id/deletar', validarSession, DisciplinaController.deletar);

// rotas para professor
router.get('/professores', validarSession, ProfessorController.index);
router.get('/professores/:id/detalhes', validarSession, ProfessorController.detalhes);
router.put('/professores/:id/editar', validarSession, ProfessorController.editar);
router.delete('/professores/:id/deletar', validarSession, ProfessorController.deletar);

// rotas para aluno
router.get('/alunos', validarSession, AlunoController.index);
router.get('/alunos/:id/detalhes', validarSession, AlunoController.detalhes);
router.put('/alunos/:id/editar', validarSession, AlunoController.editar);
router.delete('/alunos/:id/deletar', validarSession, AlunoController.deletar);

// rotas para evento
router.get('/eventos', validarSession, EventoController.index);
router.post('/eventos/criar', validarSession, EventoController.criar);
router.put('/eventos/:id/editar', validarSession, EventoController.editar);
router.delete('/eventos/:id/deletar', validarSession, EventoController.deletar);

module.exports = router;