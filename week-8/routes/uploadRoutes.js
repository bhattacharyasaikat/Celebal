const express = require('express');
const uploadController = require('/week-8/controllers/uploadController');
const authMiddleware = require('/week-8/middlewares/authMiddleware');
const upload = require('week-8/middlewares/uploadMiddleware');
const router = express.Router();

router.use(authMiddleware);

router.post('/profile-picture', upload.single('profilePicture'), uploadController.uploadProfilePicture);

module.exports = router;