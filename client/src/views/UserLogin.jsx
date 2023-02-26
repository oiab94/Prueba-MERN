import { Form, Button } from "react-bootstrap";

const UserLogin = () => {
	return (
		<>
		<Form>
			<h3>Login</h3>

			<Form.Group className="mb-3">
				<Form.Label>Email:</Form.Label>
				<Form.Control 
					required 
					type="email" />
				<Form.Control.Feedback>Email valido</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Password:</Form.Label>
				<Form.Control 
					required 
					type="password" />
				<Form.Control.Feedback>Email valido</Form.Control.Feedback>
			</Form.Group>

			<Button type="submit">Login</Button>
		</Form>
		</>
	);
}

export default UserLogin;