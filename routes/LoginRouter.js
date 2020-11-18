const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/LoginController');
const validarLogin = require('../middleware/auth')

router.get('/', LoginController.showLogin);
router.post('/', LoginController.logar);

module.exports = router;