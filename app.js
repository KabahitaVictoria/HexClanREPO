const express = require('express');
var path = require('path')
const bodyParser = require('body-parser')
const app = express();

const pug = require('pug')
const connectDB = require('./backend/db/connect')
require('dotenv').config()

const port = process.env.PORT || 5000

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.use(express.json())
app.use('/public',express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname, 'backend/public', 'login.pug'))
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

const studentLogin = require('./backend/routes/loginStudent')
app.use('/', studentLogin)

