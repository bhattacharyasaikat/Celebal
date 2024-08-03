const express = require('express');
const helmet = require('helmet');
const { connectDB } = require('./config/database');
const { PORT } = require('./config/environment');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const weatherRoutes = require('./routes/weatherRoutes'); // New
const uploadRoutes = require('./routes/uploadRoutes'); // New
const errorMiddleware = require('./middleware/errorMiddleware');
const rateLimitMiddleware = require('./middleware/rateLimitMiddleware');

const app = express();

// Middleware
app.use(helmet());
app.use(express.json());
app.use(rateLimitMiddleware);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/weather', weatherRoutes); // New
app.use('/api/upload', uploadRoutes); // New

// Error handling middleware
app.use(errorMiddleware);

// Start server
const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (error) {
        console.error('Unable to start the server:', error);
        process.exit(1);
    }
};

start();