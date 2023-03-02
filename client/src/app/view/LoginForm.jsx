import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

function LoginForm() {
	const url = "http://localhost:8000/api/login";
	const navigate = useNavigate();
	const [emailError, setEmailError] = useState({
		isInvalid: false, 
		message: ""
	});
	const [passwordError, setPasswordError] = useState({
		isInvalid: false, 
		message: ""
	})

	// * Manejador de Submit
	const handlerSubmit = (e) => {
		const email = e.target["email"].value;
		const password = e.target["password"].value;
		e.preventDefault();

		// Reset password
		setEmailError({isInvalid: false, message: "", isValid: true});
		setPasswordError({isInvalid: false, message: "", isValid: true});

		// Envia los datos a la API
		axios.post(url, { 
			email, password 
		}, {withCredentials: true})
		.then(function (response) {
			console.log(response);
			navigate("/");
		})
		.catch(function (error) {
			const {email, password} = error.response.data;
			
			if(email !== "") 
				setEmailError({message: email, isInvalid: true});
			
			if(password !== "")
			setPasswordError({message: password, isInvalid: true});
		})
	}

	return (
		<Container>
		<Form onSubmit={handlerSubmit}>
			<Form.Label><h1>Login</h1></Form.Label>
			<Form.Group className="mb-3">
				<Form.Label>Email address</Form.Label>
				<Form.Control name="email" 
					type="text" 
					placeholder="Enter email" 
					isValid={emailError.isValid}
					isInvalid={emailError.isInvalid} />
				<Form.Control.Feedback type="invalid">
					{ emailError.message }
				</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Password</Form.Label>
				<Form.Control name="password" 
					type="password" 
					placeholder="Password"
					isValid={ passwordError.isValid }
					isInvalid={passwordError.isInvalid} />
				<Form.Control.Feedback type="invalid">
					{ passwordError.message }
				</Form.Control.Feedback>
			</Form.Group>
			<Button variant="primary" type="submit">
				Log in
			</Button>
		</Form>
		</Container>
	);
}

export default LoginForm;
