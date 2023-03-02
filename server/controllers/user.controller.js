const { errorLog } = require('../components/displayLog');
const User = require('../models/user.model');
const handleErrors = require('../components/handleErrors');
const createAToken = require("../components/createAToken");

// * Funciones GET
const signup_get = (req, res) => {
	console.log("signup_GET");
}

const login_get = (req, res) => {
	console.log("login_GET");
}

// * Funciones POST asincrona
const signup_post = async (request, response) => {
	const { email, password } = request.body;

	try {
		// * Esperamos a tener resultado del servidor
		const user = await User.create({ email, password});	
		const token = createAToken(user._id);
		const maxAge = 1 * 24 * 60 //(1 dia)

		// * Tras la respuesta continuamos
		response.cookie("jwt", token, { httpOnly: true, maxAge});
		response.status(201).json(user);
	} catch (err) {
		const errors = handleErrors(err);
		response.status(400).json(errors);
	}
}
const login_post = async (req, res) => {
	const { email, password } = req.body;
	const maxAge = 1 * 24 * 60 //(1 dia)

	try {
		// * Esperamos a tener resultado del servidor
		const user = await User.login(email, password);
		const token = createAToken(user._id);
		
		// * Tras la respuesta continuamos
		res.cookie("login", token, { httpOnly: true, maxAge});
		res.status(201).json(user);
	} catch (error) {
		const errors = handleErrors(error);

		res.status(400).json(errors);
	}
}

// * Exportacion de modulos
module.exports = {
	login_get,
	signup_get,
	login_post,
	signup_post
}