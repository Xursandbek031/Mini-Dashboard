import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function Layout({ children }) {
	return (
		<div className="min-h-screen bg-slate-100 dark:bg-slate-950">
			<Sidebar />
			<div className="main-content flex-1">
				<Navbar />
				<div className="mt-16 p-5">
					{children}
				</div>
			</div>
		</div>
	)
}

export default Layout