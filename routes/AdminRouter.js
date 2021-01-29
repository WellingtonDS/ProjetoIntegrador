const express = require('express');
const router = express.Router();
const TarefaController = require('../controllers/AdminController/TarefaController');
const TurmaController = require('../controllers/AdminController/TurmaController');
const {check, validationResult, body} = require('express-validator');
const validarSession = require('../middlewares/auth');

// rotas para tarefa
router.get('/', validarSession, TarefaController.index);
router.post('/tarefas/criar', validarSession, TarefaController.criar);
router.put('/tarefas/alterar', validarSession, TarefaController.alterar);

// rotas para turma
router.get('/turmas', validarSession, TurmaController.show);
router.get('/turmas/:id/detalhes', validarSession, TurmaController.detalhes);
router.post('/turmas/criar', validarSession, TurmaController.criar);
router.put('/turmas/:id/editar', validarSession, TurmaController.editar);
// router.delete('/turmas/:id/deletar', validarSession, TurmaController.deletar);

// // rotas para disciplina
// router.get('/disciplinas/criar', validarSession, DisciplinaController.show);
// router.post('/disciplinas/criar', validarSession, DisciplinaController.criar);
// router.put('/disciplinas/:id/editar', validarSession, DisciplinaController.editar);
// router.delete('/disciplinas/:id/deletar', validarSession, DisciplinaController.deletar);

// // rotas para professor
// router.get('/professores/criar', validarSession, ProfessorController.show);
// router.post('/professores/criar', validarSession, ProfessorController.criar);
// router.put('/professores/:id/editar', validarSession, ProfessorController.editar);
// router.delete('/professores/:id/deletar', validarSession, ProfessorController.deletar);

// // rotas para aluno
// router.get('/alunos/criar', validarSession, AlunoController.show);
// router.post('/alunos/criar', validarSession, AlunoController.criar);
// router.put('/alunos/:id/editar', validarSession, AlunoController.editar);
// router.delete('/alunos/:id/deletar', validarSession, AlunoController.deletar);

// // rotas para evento
// router.get('/eventos/criar', validarSession, EventoController.show);
// router.post('/eventos/criar', validarSession, EventoController.criar);
// router.put('/eventos/:id/editar', validarSession, EventoController.editar);
// router.delete('/eventos/:id/deletar', validarSession, EventoController.deletar);

module.exports = router;