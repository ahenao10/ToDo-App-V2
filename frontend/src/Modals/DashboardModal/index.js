import './Dashboard.css'
import { BsX } from 'react-icons/bs'
import 'chart.js/auto'
import { Bar, Line } from 'react-chartjs-2'
import { useServerDashboard } from '../../TodoContext/useServerDashboard'

function Dashboard({ setOpenDashboard }) {

    const { todoStadistics } = useServerDashboard()

    const dataCreated = todoStadistics.map((data) => data.created)

    const dataCompleted = todoStadistics.map((data) => data.completed)

    const dataDeleted = todoStadistics.map((data) => data.deleted)

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h2>Dashboard</h2>
                <BsX
                    className='close-icon'
                    size={40}
                    onClick={() => setOpenDashboard(false)}></BsX>
            </div>
            <div className='dashboard-cards'>
                <div className="dashboard" id='dashboard-days'>
                    <h2>Days</h2>
                    <Bar
                        className='chart'
                        data={{
                            labels: todoStadistics.map((data) => data.label),
                            datasets: [{
                                label: 'Created',
                                data: dataCreated,
                                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                                borderColor: 'rgba(54, 162, 235, 1)',
                                borderWidth: 2
                            },
                            {
                                label: 'Completed',
                                data: dataCompleted,
                                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                                borderColor: 'rgba(255, 99, 132, 1)',
                                borderWidth: 2
                            },
                            {
                                label: 'Deleted',
                                data: dataDeleted,
                                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                                borderColor: 'rgba(75, 192, 192, 1)',
                                borderWidth: 2
                            }]
                        }}
                    />
                </div>
                <div className="dashboard" id='dashboard-months'>
                    <h2>Months</h2>
                    <Line
                        className='chart'
                        data={{
                            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                            datasets: [{
                                label: 'Created',
                                data: [30, 20, 25, 15, 10, 35, 5],
                                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                                borderColor: 'rgba(54, 162, 235, 1)',
                                borderWidth: 2
                            },
                            {
                                label: 'Completed',
                                data: [15, 10, 12, 7, 5, 18, 2],
                                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                                borderColor: 'rgba(255, 99, 132, 1)',
                                borderWidth: 2
                            },
                            {
                                label: 'Deleted',
                                data: [5, 2, 3, 1, 1, 6, 0],
                                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                                borderColor: 'rgba(75, 192, 192, 1)',
                                borderWidth: 2
                            }]
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export { Dashboard };