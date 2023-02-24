const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	firstName: {
		type: String
	},
	lastName: {
		type: String
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
