const { UPLOAD_DIR } = require('../config/environment');
const path = require('path');

exports.uploadProfilePicture = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
        const filePath = path.join(UPLOAD_DIR, req.file.filename);
        res.json({ message: 'File uploaded successfully', filePath });
    } catch (error) {
        next(error);
    }
};