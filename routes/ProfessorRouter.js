const express = require('express');
const router = express.Router();
const ProfessorController = require('../controllers/ProfessorController');
const TurmaController = require('../controllers/TurmaController');
const AulaController = require('../controllers/AulaController');
const validarSession = require('../middlewares/auth');
const {check, validationResult, body} = require('express-validator');

router.get('/', validarSession, ProfessorController.index);
router.get('/perfil', validarSession, ProfessorController.perfil);
router.get('/horarios', validarSession, ProfessorController.horarios);
router.get('/turmas', validarSession, TurmaController.listar);
router.get('/turmas/:turma_id', validarSession, TurmaController.detalhes);
router.get('/turmas/:turma_id/:professor_disciplina_id/aulas/registrar', validarSession, AulaController.registro);
router.post('/turmas/:turma_id/:professor_disciplina_id/aulas/registrar', validarSession, AulaController.registrarAula);
router.get('/aulas/criar', validarSession, AulaController.criacao);
router.post('/aulas/criar', validarSession, AulaController.criar);
router.get('/aulas/:aula_id/frequencia', validarSession, AulaController.registroFrequencia);
router.post('/aulas/:aula_id/frequencia', validarSession, AulaController.registrarFrequencia);
router.get('/aulas/sucesso', validarSession, AulaController.sucesso);
router.get('/disciplinas', validarSession, ProfessorController.disciplinas);




module.exports = router;
 