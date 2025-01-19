import express from 'express';

const app = express();

import cors from 'cors';

import {connectToMongo} from './config/db.js';
import  foodRouter from './routes/foodRoute.js';
const PORT = 4420;

app.use(express.json());
// router end point 
app.use('/api/food', foodRouter);
// connect to the db 
connectToMongo();

app.get('/',(req,res)=> {
  res.send('Hello Rahad');
})

app.listen(PORT,() => {
  console.log(`Server is runnin on http://localhost:${PORT}`)
}); 