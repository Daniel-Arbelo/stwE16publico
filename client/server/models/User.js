const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  gmail: {
    unique: true,
    type: String
  },
  usuario: String,
  contrasena: String
})

const User = mongoose.model('User', userSchema);
module.exports = User;