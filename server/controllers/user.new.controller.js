const user = require("../models/user.model");
const { hashPassword } = require("../components/hashAPassword");
const log = require("../components/displayLog");

// * POST un nuevo user
const setUser = (req, res) => {
	// * Como hash se ejecuta de forma asincrona debemos pasarle nuestro password dentro de ella
	hashPassword(req.body.password)
		.then(password => {
			const {firstName,lastName,email} = req.body;

			user.create({firstName, lastName, email, password})
				.then(user => res.json(user))
				.catch(err => res.json(err))
		})
		.catch(err => res.json(err))
}

module.exports = setUser;