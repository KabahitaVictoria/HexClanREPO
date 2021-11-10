const express = require('express');
var path = require('path')
const bodyParser = require('body-parser')
const app = express();
const studentLogin = require('./backend/routes/loginStudent')
const connectDB = require('./backend/db/connect')
require('dotenv').config()

const port = process.env.PORT || 5000


app.set('public', path.join(__dirname, 'public'))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', studentLogin)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname, 'backend/public', 'login.html'))
})

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

