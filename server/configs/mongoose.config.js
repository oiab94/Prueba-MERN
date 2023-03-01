const log = require("../components/displayLog");
const mongoose = require("mongoose");

// * Conexión a la DB
const url = "mongodb://localhost:27017/test-auth";

mongoose.set("strictQuery", true);
mongoose.connect(
	url,
	{
		useNewUrlParser: true, 
		useUnifiedTopology: true
	})
	.then(() => log.succesLog("Conexión a la DB exitosa"))
	.catch(() => log.errorLog("Conexion a la DB fallida"));