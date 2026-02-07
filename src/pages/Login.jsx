import { useNavigate } from "react-router-dom"
import { login } from "../utils/Auth"
import { useState } from "react"

function Login() {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [holat, setHolat] = useState('')

	const navigate = useNavigate()
	const handleLogin = (e) => {
		e.preventDefault()
		const success = login(username, password)
		if (success) {
			navigate("/")
		} else {
			setHolat("Login yoki parol xato")
			setPassword("")
			setUsername("")
		}
	}

	return (
		<div className='bg-gray-100 dark:bg-gray-900 login_container'>
			<div className='bg-white dark:bg-gray-800 login_box'>
				<h2 className='text-2xl font-bold text-center text-gray-900 dark:text-white mb-6'>Login Page</h2>
				<form action="" className='login_form' onSubmit={handleLogin}>
					<input
						placeholder="Username"
						required
						value={username}
						className='bg-white dark:bg-gray-700
                   text-gray-900 dark:text-white
                   border-gray-300 dark:border-gray-600
                   placeholder-gray-400 dark:placeholder-gray-300'
						onChange={(e) => setUsername(e.target.value)}
					/>

					<input
						type="password"
						placeholder="Password"
						required
						value={password}
						className='bg-white dark:bg-gray-700
                   text-gray-900 dark:text-white
                   border-gray-300 dark:border-gray-600
                   placeholder-gray-400 dark:placeholder-gray-300'
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button className='bg-blue-500 text-white p-2 rounded-lg'>Login</button>
					<p className='text-gray-700 text-center'>Do you have an account? <a className='text-blue-600' href="/register">Register</a></p>
					<p className="text-red-500 text-center">{holat}</p>
				</form>
			</div>
		</div>
	)
}

export default Login