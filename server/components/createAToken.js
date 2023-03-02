const jwt = require("jsonwebtoken");

module.exports = (id) => {
	return jwt.sign({ id }, "clave secreta", {expiresIn: "1h"});
}