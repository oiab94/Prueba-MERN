// Manejador de errores

module.exports = (err) => {
	let error = {email: "", password:""};

	// * Controlamos un error del tipo user validation
	// console.log(err.message);
	if(err.message.includes("user validation failed")){
		// * Properties contiene el mensaje que necesitamos devolver
		Object.values(err.errors).forEach(({properties}) => {
			error[properties.path] = properties.message;
		})
	}
	
	// * Controlamos errores por duplicación de datos
	// console.log(err);
	if(err.code === 11000){
		error.email = "Thats email is already registered"
	}

	return error;
}