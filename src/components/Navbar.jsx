import { getCurrentUser } from '../utils/Auth'
import { ThemeContext } from '../hooks/ThemeContext'
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { logout } from '../utils/Auth'

function Navbar() {
	const { dark, setDark } = useContext(ThemeContext)
	const user = getCurrentUser()

	const navigate = useNavigate()
	const handleLogout = () => {
		logout()
		navigate("/login")
	}

	return (
		<div className='navbar bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow px-6 z-50'>

			<button className='mr-6' onClick={() => setDark(!dark)}>
				{dark
					? <span className="material-symbols-outlined">bedtime</span>
					: <span className="material-symbols-outlined">sunny</span>}
			</button>

			<button className='profile mr-3 flex items-center gap-2 bg-white dark:bg-slate-800'>
				<img className="w-8 h-8 rounded-full"
					src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
					alt="Profile" />
				<span className='text-lg'>{user.firstName}</span>
			</button>
			<div>
				<button className='ml-4 bg-slate-300 dark:bg-gray-600 text-gray-800 dark:text-white py-2 px-4 rounded-md' onClick={handleLogout}>Logout</button>
			</div>
		</div>
	)
}

export default Navbar
