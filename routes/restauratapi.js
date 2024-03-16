const express = require('express');
const router = express.Router();
const RestaurantController = require('../controllers/RestaurantController');

router.get('/restaurants', RestaurantController.all);

module.exports = router;