const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');
const {check, validationResult, body} = require('express-validator');
const validarSession = require('../middlewares/auth');

router.get('/', validarSession, AdminController.index);

module.exports = router;