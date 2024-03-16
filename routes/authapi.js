const express = require('express');
const router = express.Router();
const PersonController = require('../controllers/PersonController');

router.get('/people', PersonController.all);

module.exports = router;