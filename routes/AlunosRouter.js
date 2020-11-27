const express = require('express');
const router = express.Router();
const AlunoController = require('../controllers/AlunoController');
const validarSession = require('../middlewares/auth');

router.get('/', validarSession, AlunoController.index);
router.get('/perfil', validarSession, AlunoController.perfil);
router.get('/horarios', validarSession, AlunoController.horarios);
router.get('/boletim', validarSession, AlunoController.boletim);


module.exports = router;
 