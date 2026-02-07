import { useFetch } from '../hooks/useFetch'

function OrderTable() {
	const { data, loading, error } = useFetch('http://localhost:3000/orders')
	let n = 1
	const statusColor = {
		Completed: "text-green-600",
		Pending: "text-yellow-500",
		Cancelled: "text-red-600",
	};
	return (
		<div className='bg-white dark:bg-slate-900
					text-slate-800 dark:text-white p-7 rounded-lg shadow-md w-1/2'>
			<h2 className='text-2xl font-bold mb-6 border-b-2 border-gray-300 pb-2'>Recent Orders</h2>
			<table className='w-full'>
				<thead>
					<tr className='bg-slate-200 dark:bg-slate-800'>
						<th>№</th>
						<th>User</th>
						<th>Amount</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{data && data.map(o => (
						<tr key={o.id} className='border-b-2'>
							<td>{n++}</td>
							<td>{o.user}</td>
							<td>${o.amount}</td>
							<td className={statusColor[o.status]}>
								{o.status}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default OrderTable