const express = require('express');
const router = express.Router();

let {
    SaveLogin
} = require('../controllers/loginStudent')

router.post('/login',SaveLogin)

// router.post('/', async(req,res)=>{
//     console.log(req.body);
//     res.json({msg: 'success'})
// })

module.exports = router;