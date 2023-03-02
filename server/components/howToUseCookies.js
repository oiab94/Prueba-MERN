
const setCookies = (app) => {
	app.get(
	"/set-cookies",
	(req, res) => {
		// res.setHeader("Set-Cookie", "newUser=true");

		// * Usando cookie-parser
		res.cookie("newUser", false);
		res.cookie("employed", true, {maxAge: 3000, httpOnly: true}); // Remueve el cookie cada 3 segundos (3000milisegundos), httpOnly permite que solo podamos acceder al cookie por medio del protocolo

		res.send("You got the cookies!");
	})

}
const readCookies = (app) => {
	app.get(
		"/read-cookies"),
		(req, res) => {
			const cookies = req.cookies;
			
			console.log(cookies);
			
			// res.json(cookies);
		}	
}
module.exports = {
	setCookies,
	readCookies
};