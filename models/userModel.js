const mongoose = require('mongoose');

//Define User Schema
const UserSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true,
        unqiue: true,
    },
    age: {
        type: 'number',
        required: true
    },
});

//Create User Model
const User = new mongoose.model('User', UserSchema);

module.exports = User;