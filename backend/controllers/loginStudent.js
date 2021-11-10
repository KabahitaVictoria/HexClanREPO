const Login = require('../models/login');



const SaveLogin = (req,res)=>{
   let data = new Login({
        username: req.body.username,
        password: req.body.password
    })
    data.save()
    .then(res.status(201).json({ data }))
    .catch((err)=>{
        res.json({msg:"oops something went wrong"}, err)
    })
}




module.exports = {
    SaveLogin
}