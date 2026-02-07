import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
	return (
		<div className='sidebar bg-slate-300 dark:bg-slate-900 
			text-slate-800 dark:text-white'>
			<h2 className='text-center text-2xl border-b-2 border-b-gray-300 mb-2 pb-3'>Mini Dashboard</h2>
			<nav className='flex flex-col'>
				<Link to="/"><i className="mr-2 fa-solid fa-house"></i>Dashboard</Link> 
				<Link to="/users"><i className="mr-2 fa-solid fa-user"></i>Users</Link>
				<Link to="/orders"><i className='mr-2 fa-solid fa-cart-shopping'></i>Orders</Link>
				<Link to="/setting"><i className="mr-2 fa-solid fa-gear"></i>Setting</Link>
			</nav>
		</div>
	)
}

export default Sidebar