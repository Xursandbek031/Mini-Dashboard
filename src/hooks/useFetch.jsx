import { useState, useEffect } from 'react'

export function useFetch(url) {

	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchdata = async () => {
			setLoading(true)
			try {
				const response = await fetch(url)
				if (!response.ok) {
					throw new Error(response.statusText)
				}
				const data = await response.json()
				setData(data)
				setLoading(false)
			}
			catch (err) {
				setError(err.message)
				setLoading(false)
			}
		}
		fetchdata()
	}, [url])

	return { data, loading, error }
}