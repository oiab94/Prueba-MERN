const bcrypt = require("bcrypt");

// * Creamos una función asincrona que retornara la clave hash
const hashPassword = async (password) => {
	return await bcrypt.hash(password, 10);
}

// * Las comparaciones de claves tambien se realizan de forma asincrona
const comparePassword = async (password, hash) => {
	return await bcrypt.compare(password, hash);
}

// * Exportamos las funciones
module.exports = {
	hashPassword,
	comparePassword
}