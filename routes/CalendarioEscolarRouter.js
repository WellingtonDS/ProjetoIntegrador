const express = require('express');
const router = express.Router();
const CalendarioEscolarController = require('../controllers/CalendarioEscolarController');

router.get('/', CalendarioEscolarController.show)

module.exports = router;