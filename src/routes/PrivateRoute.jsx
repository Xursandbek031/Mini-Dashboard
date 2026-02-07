import { isAuthenticated } from '../utils/Auth'
import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children }) => {
	return isAuthenticated() ? children : <Navigate to="/login" replace />
}

export default PrivateRoute