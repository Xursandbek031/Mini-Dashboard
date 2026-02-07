import { useState, useEffect } from 'react'

function Users() {
	const [users, setUsers] = useState([])
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [search, setSearch] = useState("")


	useEffect(() => {
		const savedUsers = JSON.parse(localStorage.getItem("users")) || []
		setUsers(savedUsers)
	}, [])
	console.log(users)

	const filteredUsers = users.filter(user =>
		user.username.toLowerCase().includes(search.toLowerCase())
	)

	const addUser = () => {
		const newUser = {
			id: Date.now(),
			name,
			email,
		}

		const updatedUsers = [...users, newUser]
		setUsers(updatedUsers)
		localStorage.setItem("users", JSON.stringify(updatedUsers))

		setName("")
		setEmail("")
	}
	return (
		<div className='bg-white dark:bg-slate-900 
		text-slate-900 dark:text-white 
		p-5 rounded-xl shadow'>
			<div className="flex justify-between items-center mb-5 border-b pb-4">
				<h2 className='text-3xl'>Users</h2>
				<input
					className='p-3 rounded-lg border-2 border-slate-300 dark:border-slate-400 w-80 bg-white dark:bg-slate-900 
		text-slate-900 dark:text-white'
					type="text"
					placeholder="Search user by username..."
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>
			</div>

			<table className="w-full border-collapse users-table">
				<thead>
					<tr className='bg-slate-100 dark:bg-slate-800'>
						<th>ID</th>
						<th>FirstName</th>
						<th>LastName</th>
						<th>Username</th>
						<th>Password</th>
						<th>Status</th>
						{/* <th>Action</th> */}
					</tr>
				</thead>
				<tbody>
					{filteredUsers.map(user => (
						<tr key={user.id} className='border-slate-200 dark:border-slate-700
        hover:bg-slate-100 dark:hover:bg-slate-800 transition'>
							<td>{user.id}</td>
							<td>{user.firstName}</td>
							<td>{user.lastName}</td>
							<td>{user.username}</td>
							<td>{user.password}</td>
							<td>
								<span className="text-green-500">Active</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Users