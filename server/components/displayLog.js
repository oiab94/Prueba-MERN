const chalk = require("chalk");

// * Indica como presentar los console
const info = chalk.bold.gray;
const success = chalk.bold.green;
const error = chalk.bold.red

const infoLog = (message) =>
	console.log(info(`INFO: ${message}`));

const succesLog = (message) =>
	console.log(success(`SUCCESS: ${message}`));

const errorLog = (message) => 
	console.log(error(`ERROR: ${message}`));

// * Exportar los módulos
module.exports = {
	infoLog,
	succesLog,
	errorLog
}