const express = require('express');
const router = express.Router();
const TarefaController = require('../controllers/AdminController/TarefaController');
const TurmaController = require('../controllers/AdminController/TurmaController');
const {check, validationResult, body} = require('express-validator');
const validarSession = require('../middlewares/auth');

router.get('/', validarSession, TarefaController.index);
router.post('/tarefas/criar', validarSession, TarefaController.criar);
router.put('/tarefas/editar', validarSession, TarefaController.editar);

router.get('/turmas/criar', validarSession, TurmaController.show);
router.post('/turmas/criar', validarSession, TurmaController.criar);

module.exports = router;