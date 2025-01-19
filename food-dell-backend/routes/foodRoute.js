// import express from 'express';
// import { addFood } from '../controllers/foodController.js';
// import multer from 'multer';

// const foodRoute = express.Router();

// // image storage engine
// const storage = multer.diskStorage({
//     destination: "uploads",
//     filename: (req, file, cb) => {
//         return cb(null, `${Date.now()}${file.originalname}`);
//     }
// });

// const upload = multer({ storage: storage });

// foodRoute.post("/add", upload.single("image"), addFood);

// export default foodRoute;  // Default export


import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { addFood } from '../controllers/foodController.js';

const foodRoute = express.Router();

// Ensure uploads directory exists
const uploadsDir = path.resolve('uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Multer storage configuration
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Multer middleware
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only .jpg, .jpeg, or .png files are allowed!"));
    }
  },
});

// Debugging Middleware
foodRoute.post("/add", upload.single("image"), (req, res, next) => {
  console.log("Debugging Middleware");
  console.log("File:", req.file); // Log file details
  console.log("Body:", req.body); // Log form data
  if (!req.file) {
    return res.status(400).json({ success: false, message: "File is required!" });
  }
  next();
}, addFood);

export default foodRoute;
