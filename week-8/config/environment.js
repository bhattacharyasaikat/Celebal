require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 3000,
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1h',
    OPENWEATHERMAP_API_KEY: process.env.OPENWEATHERMAP_API_KEY, // New
    UPLOAD_DIR: process.env.UPLOAD_DIR || 'uploads/', // New
};