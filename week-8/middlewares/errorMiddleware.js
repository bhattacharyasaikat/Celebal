const { CustomError } = require('../utils/customError');

module.exports = (err, req, res, next) => {
    console.error(err);

    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({ message: err.message });
    }

    if (err.name === 'ValidationError') {
        return res.status(400).json({ message: err.message });
    }

    if (err.name === 'CastError') {
        return res.status(400).json({ message: 'Invalid ID format' });
    }

    if (err.code === 11000) {
        return res.status(400).json({ message: 'Duplicate key error' });
    }

    res.status(500).json({
        message: 'Internal Server Error',
        ...(process.env.NODE_ENV === 'development' && { error: err.message }),
    });
};
