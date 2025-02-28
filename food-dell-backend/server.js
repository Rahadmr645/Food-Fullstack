import express from 'express';

const app = express();

import cors from 'cors';
import 'dotenv/config';
import {connectToMongo} from './config/db.js';
import  foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import path from 'path';
const PORT = 4420;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));


// Favicon route (just to handle the request)
app.get("/favicon.ico", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "favicon.ico"));
});

// router end point 
app.use('/api/food', foodRouter);
app.use('/api/user', userRouter);
// connect to the db 
connectToMongo();

app.get('/',(req,res)=> {
  res.send('Hello Rahad');
})

app.listen(PORT,() => {
  console.log(`Server is runnin on http://localhost:${PORT}`)
}); 