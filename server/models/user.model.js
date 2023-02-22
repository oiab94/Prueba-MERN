const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: [true, "Name is required"]
	},
	lastName: {
		type: String,
		required: [true,"Last name is required"]
	},
	email: {
		type: String,
		required: [true, "Email is required"]
	},
	password: {
		type: String,
		required: [true, "Password is required"]
	}
}, { timestamps:true })

// * Creamos el modelo
module.exports = mongoose.model("user", userSchema);
