import { useFetch } from '../hooks/useFetch'

function Card() {
	const { data, loading, error } = useFetch('http://localhost:3000/stats')
	if (loading) return <p>Loading...</p>
	if (error) return <p>Error: {error}</p>
	if (!data || data.length === 0) return <p>No data available</p>
	return (
		<div className='flex justify-between gap-2'>
			{data && data.map((item) => (
				<div className='bg-white dark:bg-slate-900
					text-slate-800 dark:text-white flex items-center px-8 py-6 rounded-lg shadow-md' key={item.id}>
					<i className={`text-blue-500 mr-5 text-4xl ${item.icon}`}></i>
					<span>
						<h2 className='text-2xl font-semibold'>{item.title}</h2>
						<p className='text-4xl'>{item.value}</p>
					</span>
				</div>
			))}
		</div>
	)
}

export default Card