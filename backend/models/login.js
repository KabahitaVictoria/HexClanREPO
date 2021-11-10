
const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        maxlength: 20,
    },
    password: {
        type: String,
    }
})

module.exports = mongoose.model('login', LoginSchema)
