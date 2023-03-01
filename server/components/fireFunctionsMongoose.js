// * Disparar una función antes de crear un document
userSchema.pre("save", function (next) {
	console.log("Antes de crear y guardar un documento: ", this);
	next(); // ! Sin este método mongoose no puede continuar
})

// * Disparar una función después de crear un document y antes de guardar
userSchema.post("save", function (doc, next) {
	console.log("Después de crear y guardar un documento: ",doc);	
	next();
})