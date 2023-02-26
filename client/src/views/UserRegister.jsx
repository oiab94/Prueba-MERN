import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const UserRegister = () => {
	const [formValid, setFormValid] = useState(false);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] =useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [confirmPasswordError, setConfirmPasswordError] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();

		axios.post(
			"http://localhost:8000/api/setUser",
			{firstName, lastName, email, password, confirmPassword}
		)
			.then(res => console.log(res))
			// * Guardamos los errores recibidos del servidor
			.catch(
				({ response }) => {
					const error = response.data;

					setEmailError(error.email);
					setPasswordError(error.password);
					setConfirmPasswordError(error.confirmPassword)
					setFormValid(true)
				})
	}

	return (
		<Form noValidate validated={formValid} onSubmit={handleSubmit}>
      <h3>Registro</h3>			

				{/* Set FirstName */}
			<Form.Group className="mb-3" >
				<Form.Label>First Name:</Form.Label>
				<Form.Control
					required 
					type="text"
					onChange={e => setFirstName(e.target.value)} />
			</Form.Group>

				{/* Set Lastname */}
			<Form.Group className="mb-3" >
				<Form.Label>Last Name:</Form.Label>
				<Form.Control
					required 
					type="text"
					onChange={e => setLastName(e.target.value)} />
			</Form.Group>

				{/* Set email */}
			<Form.Group className="mb-3">
				<Form.Label>Email:</Form.Label>
				<Form.Control 
					required 
					type="email"
					onChange={e => setEmail(e.target.value)} />
				<Form.Control.Feedback
					type="invalid">
						{emailError}
					</Form.Control.Feedback>
			</Form.Group>

				{/* Set password */}
			<Form.Group className="mb-3">
				<Form.Label>Password:</Form.Label>
				<Form.Control 
					required
					minLength={6}
					type="password"
					onChange={e => setPassword(e.target.value)} />
				<Form.Control.Feedback
					type="invalid">
						{passwordError}
				</Form.Control.Feedback>
			</Form.Group>

				{/* Repeat password */}
			<Form.Group className="mb-3">
				<Form.Label>Confirm Password:</Form.Label>
				<Form.Control 
					required
					type="password"
					isInvalid={
						confirmPassword !== undefined ? 
							true :
							undefined}
					onChange={e => setConfirmPassword(e.target.value)} />
				<Form.Control.Feedback
					type="invalid">
						{confirmPasswordError}
				</Form.Control.Feedback>			
			</Form.Group>

			<Button type="submit">Enviar Form</Button>
		</Form>
	);
};

export default UserRegister;
