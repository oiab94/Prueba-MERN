const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
	email:{
		type: String,
		required: [true,"Email is required"],
		unique: true,
		validate:[isEmail, "Please enter valid email"]
	},
	password: {
		type: String,
		required: [true, "Password is required"],
		minlength: [6, "Password length must be 6"]
	}
});

const User = mongoose.model("user", userSchema);

module.exports = User;