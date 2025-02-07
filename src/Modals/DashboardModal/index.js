import './Dashboard.css'
import { BsX } from 'react-icons/bs'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar, Line } from 'react-chartjs-2'

function Dashboard({ setOpenDashboard }) {
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
                <aside className="dashboard" id='dashboard-days'>
                    <h2>Days</h2>
                    <Bar
                        className='chart'
                        data={{
                            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', '  Sunday'],
                            datasets: [{
                                label: 'Created',
                                data: [8, 3, 5, 4, 2, 10, 1],
                                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                                borderColor: 'rgba(54, 162, 235, 1)',
                                borderWidth: 2
                            },
                            {
                                label: 'Completed',
                                data: [4, 1, 3, 2, 1, 5, 0],
                                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                                borderColor: 'rgba(255, 99, 132, 1)',
                                borderWidth: 2
                            },
                            {
                                label: 'Deleted',
                                data: [1, 0, 1, 0, 0, 2, 0],
                                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                                borderColor: 'rgba(75, 192, 192, 1)',
                                borderWidth: 2
                            }]
                        }}
                    />
                </aside>
                <aside className="dashboard" id='dashboard-months'>
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
                </aside>
            </div>
        </div>
    )
}

export { Dashboard };