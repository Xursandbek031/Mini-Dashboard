import Card from '../components/Card'
import Chart from '../components/Chart'
import OrderTable from '../components/OrderTable'
import { useFetch } from '../hooks/useFetch'

function Dashboard() {



	return (
		<div>
			<Card />
			<div className='flex justify-between gap-4 mt-4'>
				<Chart />
				<OrderTable />
			</div>
		</div>
	)
}

export default Dashboard