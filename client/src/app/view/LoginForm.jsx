import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container"

function LoginForm() {
	const handlerSubmit = (e) => {
		const email = e.target["email"];
		const password = e.target["password"];
		e.preventDefault();


		// Obtener los valores
		console.log(email.value);
		console.log(password.value);
	}

	return (
		<Container>
		<Form onSubmit={handlerSubmit}>
			<Form.Label><h1>Login</h1></Form.Label>
			<Form.Group className="mb-3">
				<Form.Label>Email address</Form.Label>
				<Form.Control name="email" type="email" placeholder="Enter email" />
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Password</Form.Label>
				<Form.Control name="password" type="password" placeholder="Password" />
			</Form.Group>
			<Button variant="primary" type="submit">
				Log in
			</Button>
		</Form>
		</Container>
	);
}

export default LoginForm;
