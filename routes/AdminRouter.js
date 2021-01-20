const express = require('express');
const router = express.Router();
const TarefaController = require('../controllers/AdminController/TarefaController');
const {check, validationResult, body} = require('express-validator');
const validarSession = require('../middlewares/auth');

router.get('/', validarSession, TarefaController.index);
router.post('/tarefas/criar', validarSession, TarefaController.criar);
router.put('/tarefas/editar', validarSession, TarefaController.editar);

module.exports = router;