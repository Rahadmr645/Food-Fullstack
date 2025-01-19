import foodModel  from "../models/foodModel.js";


import fs from 'fs';

// add food-item 

// const addFood = async (req,res) => {

//      const image_filename = req.file.filename;

//      const food = new foodModel({
//         name:req.body.name,
//         description:req.body.description,
//         price:req.body.price,
//         category:req.body.category,
//         image:image_filename,
//      })
     
//      try {
//         await food.save();
//         res.json({success:true,message:"Food Added"})
//      } catch (error) {
//        console.log(error) ;
//        res.json({success:false,message:"error"})
//      }
// }


const addFood = async (req, res) => {
   if (!req.file) {
     return res.status(400).json({ success: false, message: "File is required!" });
   }
 
   const image_filename = req.file.filename;
 
   const food = new foodModel({
     name: req.body.name,
     description: req.body.description,
     price: req.body.price,
     category: req.body.category,
     image: image_filename,
   });
 
   try {
     await food.save();
     res.json({ success: true, message: "Food Added" });
   } catch (error) {
     console.log(error);
     res.status(500).json({ success: false, message: "Error adding food" });
   }
 };
 
export {addFood};