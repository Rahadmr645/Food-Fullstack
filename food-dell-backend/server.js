const express = require('express');

const app = express();

const PORT = 4420;


app.get('/',(req,res)=> {
  res.send('Hello Rahad');
})

app.listen(PORT,() => {
  console.log(`Server is runnin on http://localhost:${PORT}`)
}); 