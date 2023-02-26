const mongoose = require("mongoose");
const { isEmail } = require("validator")
const bcrypt = require("bcrypt");

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

// * Hasheamos el password antes de guardar en la DB
userSchema.pre("save", async function(next) {
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);

	next();
})

// * Confirmación de password
userSchema.virtual("confirmPassword")
	.get( function() { return confirmPassword } )
	.set( function(value){ confirmPassword = value } );

userSchema.pre("validate", function(next){
	if(this.password !== this.confirmPassword)
		this.invalidate("confirmPassword", "Password are not equal")	
	next();
})

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