const express = require('express');
const router = express.Router();

let {
    saveLogin
} = require('../controllers/loginStudent')

router.route('/').post(saveLogin)

module.exports = router;