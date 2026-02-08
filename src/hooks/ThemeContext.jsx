import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
	const [dark, setDark] = useState(() => {
		const theme = localStorage.getItem("theme")
		return theme === "dark" ? true : false
	})

	useEffect(() => {
		const html = document.documentElement
		if (dark) {
			html.classList.add("dark")
			localStorage.setItem("theme", "dark")
		} else {
			html.classList.remove("dark")
			localStorage.setItem("theme", "light")
		}
	}, [dark])

	return (
		<ThemeContext.Provider value={{ dark, setDark }}>
			{children}
		</ThemeContext.Provider>
	)
}
