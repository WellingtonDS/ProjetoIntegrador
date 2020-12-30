const express = require('express');
const router = express.Router();
const CalendarioEscolarController = require('../controllers/CalendarioEscolarController');

router.get('/', CalendarioEscolarController.show);
router.get("/eventos", CalendarioEscolarController.buscar)

module.exports = router;