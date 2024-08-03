const axios = require('axios');
const { OPENWEATHERMAP_API_KEY } = require('../config/environment');

exports.getCurrentWeather = async (req, res, next) => {
    try {
        const { city } = req.params;
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHERMAP_API_KEY}&units=metric`);
        res.json(response.data);
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return res.status(404).json({ message: 'City not found' });
        }
        next(error);
    }
};