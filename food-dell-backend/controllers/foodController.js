import foodModel from "../models/foodModel.js";


import fs from 'fs'

// add food item 
const addFood = async (req,res) => {
      
  let image_filename = `${req.file.filename}`

  const food = new foodModel({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    category:req.body.category,
    image:image_filename
  })


  try {
    await food.save();
    res.json({success:true,message:"food added"});
  } catch (error) {
    console.log(error)
    res.json({success:false,message:"food fail to add"})
  }


}


export {addFood};























// // Add a food item
// const addFood = async (req, res) => {
//   try {
//     // Ensure a file is uploaded
//     if (!req.file) {
//       return res.status(400).json({ success: false, message: "Image file is required." });
//     }

//     // Extract file details and request body
//     const image_filename = `${process.env.STATIC_PATH}/${req.file.filename}`;

//     const { name, description, price, category } = req.body;

//     // Validate required fields
//     if (!name || !description || !price || !category) {
//       return res.status(400).json({ success: false, message: "All fields are required." });
//     }

//     // Create a new food document
//     const food = new foodModel({
//       name,
//       description,
//       price,
//       category,
//       image: image_filename,
//     });

//     // Save the food document to the database
//     await food.save();

//     res.status(201).json({ success: true, message: "Food added successfully." });
//   } catch (error) {
//     console.error("Error adding food:", error);

//     // Handle unexpected errors
//     res.status(500).json({
//       success: false,
//       message: "An error occurred while adding the food item.",
//     });
//   }
// };

// export { addFood };
