
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