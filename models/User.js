const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    passwordHash: String,
    randomString: String,
    activationToken: String,
    activated: {
        type: Boolean,
        default:false,
    },
}, { versionKey: false })

const User= mongoose.model('User', userSchema);

module.exports= User