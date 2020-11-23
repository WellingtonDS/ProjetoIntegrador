const express = require('express');
const router = express.Router();
const ProfessorController = require('../controllers/ProfessorController');
const TurmaController = require('../controllers/TurmaController');
const validarSession = require('../middlewares/auth')

router.get('/', validarSession, ProfessorController.index);
router.get('/perfil', validarSession, ProfessorController.perfil);
router.get('/horarios', validarSession, ProfessorController.horarios);
router.get('/turmas', validarSession, TurmaController.listar);
router.get('/turmas/:turma_id', validarSession, TurmaController.detalhes);
router.get('/disciplinas', validarSession, ProfessorController.disciplinas);



module.exports = router;
 