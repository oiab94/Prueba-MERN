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

// * Método estático para login
userSchema.statics.login = async function (email, password) {
	// * Retornar un usuario con el mismo email
	const user = await this.findOne({email})

	// * Verificamos si existe ese usuario con ese email
	if(user){
		// * Verificamos si las contraseñas son iguales
		const auth = await bcrypt.compare(password, user.password)
		
		// * Si son iguales retornamos el usuario
		if(auth){
			return user;
		}
		// * Si no son iguales arrojamos el error
		throw Error("Incorrect password")
	}
	// * Si no existe arrojamos un error
	throw Error("Incorrect email");

}

const User = mongoose.model("user", userSchema);

module.exports = User;