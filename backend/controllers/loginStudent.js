const Login = require('../models/login');
const axios = require('axios');
const login = require('../models/login');


const SaveLogin = async (req,res) => {
    try {
        var login = new Login({
            username: req.body.username,
            password: req.body.password
        })
        var result = await login.save()
        res.send(result)
    } catch (error) {
        res.status(500).send(error)
    } 
}

axios({
    method: 'post',
    url: '/login',
    data: login,
    headers: { "Content-Type": "multipart/form-data" },
})
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});


module.exports = {
    SaveLogin
}