import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { addFood, listFood, removeFood } from '../controllers/foodController.js';

const foodRoute = express.Router();

// Ensure uploads folder exists
const uploadsDir = './uploads';
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

// Multer storage engine configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads'); // Specify the uploads folder
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}${path.extname(file.originalname)}`;
        cb(null, uniqueName); // Preserve original extension
    },
});

// Multer middleware for file upload
const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        if (!allowedTypes.includes(file.mimetype)) {
            return cb(new Error('Only JPEG, PNG, and JPG files are allowed'));
        }
        cb(null, true);
    },
});

// Routes
foodRoute.post('/add', upload.single('image'), addFood); // Add food item with image
foodRoute.get('/list', listFood); // List all food items
foodRoute.post('/remove', removeFood); // Remove a food item

export default foodRoute;
