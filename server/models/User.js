const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: String // You can extend this schema for roles and permissions
});

module.exports = mongoose.model('User', userSchema);
