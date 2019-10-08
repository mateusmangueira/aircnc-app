const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    //Colocar outros atributos do usuario
    email: String,
});

module.exports = mongoose.model('User', UserSchema);