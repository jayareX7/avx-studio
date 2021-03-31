
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3 },
  password: {
    type: String,
    required: true,
    minlength: 8 },
}, {
  timestamps: true,
});



const User = mongoose.model.User || mongoose.model(User, userSchema, "Users");
userSchema.plugin(passportLocalMongoose);
module.exports = User;