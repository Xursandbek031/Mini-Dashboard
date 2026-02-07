// CHECK AUTHENTICATION
export const isAuthenticated = () => {
	return localStorage.getItem("token") !== null
}

// LOGIN FUNCTION
export const login = (username, password) => {
	const users = JSON.parse(localStorage.getItem("users")) || []
	const user = users.find(
		(u) => u.username === username && u.password === password
	)
	if (user) {
		localStorage.setItem("token", "fake-token")
		localStorage.setItem("currentUser", JSON.stringify(user))
		return true
	}
	return false
}

// LOGOUT FUNCTION
export const logout = () => {
	localStorage.removeItem("token")
	localStorage.removeItem("currentUser")
}

// REGISTER FUNCTION
export const register = (firstName, lastName, username, password) => {
	const users = JSON.parse(localStorage.getItem("users")) || []
	const newUser = {
		id: Date.now(),
		firstName,
		lastName,
		username,
		password,
	}
	users.push(newUser)
	localStorage.setItem("users", JSON.stringify(users))
}

export const getCurrentUser = () => {
	return JSON.parse(localStorage.getItem("currentUser"))
}