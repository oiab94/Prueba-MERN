const authController = require("../controllers/user.controller")

const router = (app) => {
	app.get("/api/signup", authController.signup_get);
	app.post("/api/signup", authController.signup_post);
	app.get("/api/login", authController.login_get);
	app.post("/api/login", authController.login_post);
}

module.exports = router;