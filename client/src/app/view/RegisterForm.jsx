import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import axios from "axios";

const url = "http://localhost:8000/api/signup";

function RegisterForm() {
	const handlerSubmit = (e) => {
		const email = e.target["email"].value;
		const password = e.target["password"].value;
		e.preventDefault();

		// Envia los datos a la API
		axios.post(url, { 
			email, password 
		}, {withCredentials: true})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		})
	}

	return (
		<Container>
		<Form onSubmit={handlerSubmit}>
			<Form.Label><h1>Sign Up</h1></Form.Label>
			<Form.Group className="mb-3">
				<Form.Label>Email address</Form.Label>
				<Form.Control name="email" type="email" placeholder="Enter email" />
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Password</Form.Label>
				<Form.Control name="password" type="password" placeholder="Password" />
			</Form.Group>
			<Button variant="primary" type="submit">
				Register
			</Button>
		</Form>
		</Container>
	);
}

export default RegisterForm;
