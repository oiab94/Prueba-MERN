const log = require("./components/displayLog");
const express = require("express");
const cors = require("cors");

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

// * Conexión a la DB
require("./configs/mongoose.config");

// * Enviamos las peticiones a nuestra API
require("./routes/user.routes")(app);