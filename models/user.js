 const mongoose = require('mongoose');

 const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 8,
    },
 })


 const User = mongoose.model('auth', userSchema)


 module.exports = User;