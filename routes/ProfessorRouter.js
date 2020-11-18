const express = require('express');
const router = express.Router();
const ProfessorController = require('../controllers/ProfessorController');
const validarSession = require('../middleware/auth')

router.get('/', validarSession, ProfessorController.index);

module.exports = router;
 