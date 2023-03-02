const log = require("./components/displayLog");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// * Inicia express
const app = express();
const port = 8000;
const whiteList = ["http://localhost:3000"]
const corsOptions = {
	origin: whiteList,
	credentials: true
}

app.listen(
	port,
	() => { log.infoLog(`Puerto habilitado: ${port}`)}
);

// * Se habilita MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors(corsOptions));
app.use(cookieParser());

// * Conexión a la DB
require("./configs/mongoose.config");

// * Enviamos las peticiones a nuestra API
require("./routes/user.routes")(app);

// // * Prueba de Cookies
// const {setCookies, readCookies} = require("./components/howToUseCookies")
// setCookies(app);
// readCookies(app);