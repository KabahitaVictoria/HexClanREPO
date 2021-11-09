const express = require('express');
const router = express.Router();

router.get('/login', (req,res)=>{
    res.sendFile('/Users/Admin/HexClanBackend/backend/public/login.html')
})

let {
    saveLogin
} = require('../controllers/loginStudent')

router.route('/login').post(saveLogin)

module.exports = router;