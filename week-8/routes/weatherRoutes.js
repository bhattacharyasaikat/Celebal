const express = require('express');
const weatherController = require('../controllers/weatherController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.use(authMiddleware);

router.get('/current/:city', weatherController.getCurrentWeather);

module.exports = router;