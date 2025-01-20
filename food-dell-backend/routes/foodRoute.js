// import express from 'express';
// import multer from 'multer';
// import path from 'path';
// import fs from 'fs';
// import { addFood } from '../controllers/foodController.js';

// const foodRoute = express.Router();

// // Configure the storage engine for Multer
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         const uploadPath = path.join(process.cwd(), 'uploads'); // Directory for uploaded files
//         if (!fs.existsSync(uploadPath)) {
//             fs.mkdirSync(uploadPath, { recursive: true }); // Create directory if it doesn't exist
//         }
//         cb(null, uploadPath);
//     },
//     filename: (req, file, cb) => {
//         const uniqueSuffix = `${Date.now()}-${file.originalname}`;
//         cb(null, uniqueSuffix);
//     }
// });

// // Initialize Multer with the configured storage engine
// const upload = multer({ 
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//         const fileTypes = /jpeg|jpg|png|gif/;
//         const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
//         const mimeType = fileTypes.test(file.mimetype);

//         if (extName && mimeType) {
//             cb(null, true);
//         } else {
//             cb(new Error('Only image files are allowed!'), false);
//         }
//     },
//     limits: { fileSize: 2 * 1024 * 1024 } // Limit file size to 2MB
// });

// // Define the POST route for adding food
// foodRoute.post('/add', upload.single('image'), addFood);

// // Error-handling middleware for Multer errors
// foodRoute.use((err, req, res, next) => {
//     if (err instanceof multer.MulterError) {
//         res.status(400).json({ success: false, message: err.message });
//     } else if (err) {
//         res.status(400).json({ success: false, message: err.message });
//     } else {
//         next();
//     }
// });

// export default foodRoute;



import express from 'express'
import {addFood} from '../controllers/foodController.js'
const foodRoute = express.Router();
import multer from 'multer'

// image storage engin
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}`)

    }
})

const upload = multer({storage:storage})


foodRoute.post('/add',upload.single("image"),addFood);

export default foodRoute;