const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');
const {check, validationResult, body} = require('express-validator');
const validarSession = require('../middlewares/auth');

router.get('/', validarSession, AdminController.index);
router.post('/tarefas/guardar', validarSession, AdminController.guardar);

module.exports = router;