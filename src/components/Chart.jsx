import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

function Chart() {
	const { data, loading, error } = useFetch('http://localhost:3000/sales')
	if (loading) return <p>Loading...</p>
	if (error) return <p>Error: {error}</p>
	if (!data || data.length === 0) return <p>No data available</p>

	return (
		<div className='bg-white dark:bg-slate-900
					text-slate-800 dark:text-white p-7 rounded-lg shadow-md w-1/2'>
			<h2 className='text-2xl font-bold mb-6 border-b-2 border-gray-300 pb-2'>Sales Chart</h2>
			<LineChart width={500} height={300} data={data}>
				<XAxis dataKey="month" />
				<YAxis />
				<Tooltip />
				<Line dataKey="sales" />
			</LineChart>
		</div>
	)
}

export default Chart