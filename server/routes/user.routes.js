const setUser = require("../controllers/user.new.controller");

// * Exportamos nuestras rutas
module.exports = (app) => {
	app.post("/api/setUser", setUser)
}