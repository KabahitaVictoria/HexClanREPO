const Login = require('../models/login');


const saveLogin = async (req,res) => {
    const login = await Login.create(req.body)
    res.status(201).json({ login }) }


module.exports = {
    saveLogin
}