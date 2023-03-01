const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

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

// * Disparar una función antes de guardar un documento
userSchema.pre("save", async function (next) {
	// ! Este será el nuevo password hasheado
	const salt = await bcrypt.genSalt(10);
	
	this.password = await bcrypt.hash(this.password, salt)

	next();
})

const User = mongoose.model("user", userSchema);

module.exports = User;