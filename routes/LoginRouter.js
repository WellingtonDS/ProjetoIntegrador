const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/LoginController');
const validarLogin = require('../middleware/auth');

router.get('/professor', LoginController.showLoginProfessor);
router.post('/professor', LoginController.logar);
router.get('/aluno', validarLogin, LoginController.showLoginAluno);
router.post('/aluno', validarLogin, LoginController.logar);

module.exports = router;