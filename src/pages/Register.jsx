import React from 'react'
import { register } from "../utils/Auth"

function Register() {
	const [username, setUsername] = React.useState("")
	const [password, setPassword] = React.useState("")
	const [firstName, setFirstName] = React.useState("")
	const [lastName, setLastName] = React.useState("")


	const handleRegister = (e) => {
		e.preventDefault()
		register(firstName, lastName, username, password)
		window.location.href = "/login"
	}
	return (
		<div className='bg-gray-100 dark:bg-gray-900 login_container'>
			<div className='bg-white dark:bg-gray-800 login_box'>
				<h2 className='text-2xl font-bold text-center text-gray-900 dark:text-white mb-6'>Register Page</h2>
				<form action="" className='login_form' onSubmit={handleRegister}>
					<input
						placeholder='First Name'
						required
						value={firstName}
						className='bg-white dark:bg-gray-700
                   text-gray-900 dark:text-white
                   border-gray-300 dark:border-gray-600
                   placeholder-gray-400 dark:placeholder-gray-300'
						onChange={(e) => setFirstName(e.target.value)}
					/>

					<input
						placeholder='Last Name'
						required
						value={lastName}
						className='bg-white dark:bg-gray-700
                   text-gray-900 dark:text-white
                   border-gray-300 dark:border-gray-600
                   placeholder-gray-400 dark:placeholder-gray-300'
						onChange={(e) => setLastName(e.target.value)}
					/>

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

					<button className='bg-blue-500 text-white p-2 rounded-lg'>Register</button>
					<p className='text-gray-700 text-center'>Already have an account? <a className='text-blue-600' href="/login">Login</a></p>
				</form>
			</div>
		</div>
	)
}

export default Register