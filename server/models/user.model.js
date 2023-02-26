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

// // *Dispara una función después de guardar en la DB
// userSchema.post("save", function(doc, next) {
// 	console.log("New user was created",doc);
// 	next();
// })

// // *Dispara una función antes de guardar en la DB
// userSchema.pre("save",function(next) {
// 	console.log("User will be created & saved", this);
// 	next();
// })