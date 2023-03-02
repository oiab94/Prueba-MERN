import { createBrowserRouter } from "react-router-dom"
import LoginForm from "../view/LoginForm"
import RegisterForm from "../view/RegisterForm"

const router = createBrowserRouter([
	{
		path:"/",
		element:<h1>Use "/login" o "/signup"</h1>
	},
	{
		path:"/signup",
		element:<RegisterForm />
	},
	{
		path:"/login",
		element:<LoginForm />
	}
])

export default router;