const log = require("./components/displayLog");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// * Inicia express
const app = express();
const port = 8000;

app.listen(
	port,
	() => { log.infoLog(`Puerto habilitado: ${port}`)}
);

// * Se habilita MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(cookieParser()); // * Habilitamos el uso de cookie parser

// * Conexión a la DB
require("./configs/mongoose.config");

// * Importamos nuestras rutas de acceso a la API
require("./routes/user.routes")(app);

// // * Test de cookies
// app.get(
// 	"/api/get-cookies", 	// * Imageinamos que estamos navegando en esta dirección 
// 	(req, res) => {
// 		// * Este método se usa sin cookie-parse
// 		// res.setHeader("Set-Cookie", "NewUser=true");

// 		// * Utilizando cookie parser
// 		res.cookie("NewUser", false);

// 		// * Podemos especificarle opciones como por ejemplo tiempo de vida
// 		res.cookie("isEmployee", false, {maxAge: 300})

// 		res.send("Tienes las cookies");
// 	}) 