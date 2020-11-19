const express = require('express');
const router = express.Router();
const ProfessorController = require('../controllers/ProfessorController');
const validarSession = require('../middlewares/auth')

router.get('/', validarSession, ProfessorController.index);
router.get('/perfil', validarSession, ProfessorController.perfil);
router.get('/horarios', validarSession, ProfessorController.horarios);
router.get('/disciplinas', validarSession, ProfessorController.disciplinas);


module.exports = router;
 