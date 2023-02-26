const user = require("../models/user.model");
const log = require("../components/displayLog");

// * Maneajador de errores
const handleErrros = (err) => {
	let errors = {email:"", password:""};

	// * Validamos el error
	if(err.message.includes("user validation failed"))
	// * Quitamos los errores que debemos saber
		Object.values(err.errors)
			.forEach(
				// * Indicamos a nuestro objeto el error indicado
				({properties}) => {
					errors[properties.path] = properties.message;
				})
	
	return errors ;
}

// * POST un nuevo user
const setUser = (req, res) => {
	const {firstName, lastName, email, password, confirmPassword} = req.body;

	user.create({firstName, lastName, email,password, confirmPassword})
		.then(
			user => {
				res.status(201).json(user)
		})
		.catch(
			err => {
				const errors = handleErrros(err);
				res.status(400).json(errors)
		})
}

module.exports = setUser;