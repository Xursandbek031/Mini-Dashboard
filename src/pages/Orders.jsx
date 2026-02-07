import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'

function Orders() {
	const [search, setSearch] = useState("")

	const { data: orders, loading, error } = useFetch('http://localhost:3000/orders')
	if (loading) return <p>Loading...</p>
	if (error) return <p>Error: {error}</p>
	if (!orders || orders.length === 0) return <p>No data available</p>
	console.log(orders)

	const statusColor = {
		Completed: "text-green-600",
		Pending: "text-yellow-500",
		Cancelled: "text-red-600",
	};

	const filteredOrders = orders.filter(order =>
		order.user.toLowerCase().includes(search.toLowerCase())
	)

	return (
		<div className='bg-white dark:bg-slate-900 
		text-slate-900 dark:text-white 
		p-5 rounded-xl shadow'>
			<div className="flex justify-between items-center mb-5 border-b pb-4">
				<h2 className='text-3xl'>Orders</h2>
				<input
					className='p-3 rounded-lg border-2 border-slate-300 dark:border-slate-400 w-80 bg-white dark:bg-slate-900 
		text-slate-900 dark:text-white'
					type="text"
					placeholder="Search order..."
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>
			</div>

			<table className="w-full border-collapse users-table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Username</th>
						<th>Role</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{filteredOrders.map(order => (
						<tr key={order.id}>
							<td>{order.id}</td>
							<td>{order.user}</td>
							<td>{order.amount}</td>
							<td className={statusColor[order.status]}>{order.status}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Orders