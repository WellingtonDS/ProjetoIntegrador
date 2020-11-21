const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/LoginController');
const validarLogin = require('../middlewares/auth');
const {check, validationResult, body} = require('express-validator');

router.use(function(req, res, next) {
    if(req.query._method == 'DELETE'){
        req.method = 'DELETE';
        req.url = req.path;
    }
    next();
})

router.get('/professor', LoginController.showLoginProfessor);
router.post('/professor', [
    check('email').isEmail().withMessage('Digite um email válido.'), 
    check('senha').isLength({min:6}).withMessage('O tamanho da senha deve conter no mínimo 6 caracteres.')], 
    LoginController.logar);
router.get('/aluno', validarLogin, LoginController.showLoginAluno);
router.post('/aluno', validarLogin, LoginController.logar);
router.post('/aluno', validarLogin, LoginController.logar);
router.delete('/', LoginController.logout);

module.exports = router;