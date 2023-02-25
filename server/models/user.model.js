const mongoose = require("mongoose");
const { isEmail } = require("validator")

const userSchema = new mongoose.Schema({
	firstName: {
		type: String
	},
	lastName: {
		type: String
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		validate: [isEmail, "Please enter a valid email"]
	},
	password: {
		type: String,
		required: [true, "Password is required"],
		minlength: [6, "Password must be 6 characters"]
	}
}, { timestamps:true })

// * Creamos el modelo
module.exports = mongoose.model("user", userSchema);
