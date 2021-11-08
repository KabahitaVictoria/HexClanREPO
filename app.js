const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const studentLogin = require('./backend/routes/loginStudent')
const connectDB = require('./backend/db/connect')
require('dotenv').config()


app.use(express.json());
app.use(bodyParser.json())
app.use('/student', studentLogin)

const port = process.env.PORT || 5000

const start = async () =>{
  try {
    await connectDB(process.env.MONGODB_URL)
    app.listen(port, ()=>{
      console.log(`Server is listening at port ${port}`);
    })

  } catch (error) {
    console.log(error);
  }
}

start()

