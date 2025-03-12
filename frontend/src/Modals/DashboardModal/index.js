import React from 'react'
import './Dashboard.css'
import { BsX } from 'react-icons/bs'
import 'chart.js/auto'
import { Bar, Line } from 'react-chartjs-2'
import { useServerDashboard } from '../../TodoContext/useServerDashboard'

function Dashboard({ setOpenDashboard }) {

    const { todoStadisticsMonth, todoStadisticsYear } = useServerDashboard()

    const dataCreated = todoStadisticsMonth.map((data) => data.created)

    const dataCompleted = todoStadisticsMonth.map((data) => data.completed)

    const dataDeleted = todoStadisticsMonth.map((data) => data.deleted)

    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']

    let dataCreatedYear = {}
    let dataCompletedYear = {}
    let dataDeletedYear = {}

    months.forEach(month => {
        dataCreatedYear[month.toLocaleLowerCase()] = todoStadisticsYear[month]?.reduce((acc, data) => acc + data.created, 0) || 0
    })

    months.forEach(month => {
        dataCompletedYear[month.toLocaleLowerCase()] = todoStadisticsYear[month]?.reduce((acc, data) => acc + data.completed, 0) || 0
    })

    months.forEach(month => {
        dataDeletedYear[month.toLocaleLowerCase()] = todoStadisticsYear[month]?.reduce((acc, data) => acc + data.deleted, 0) || 0
    }) // Se obtienen los datos de los meses del año

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth); // Actualiza el estado con el nuevo ancho
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [windowWidth]);

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
                            labels: todoStadisticsMonth.map((data) => data.label),
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
                        options={{
                            responsive: true,
                            maintainAspectRatio: false
                        }}
                        key={windowWidth}
                    />
                </div>
                <div className="dashboard" id='dashboard-months'>
                    <h2>Months</h2>
                    <Line
                        className='chart'
                        data={{
                            labels: Object.keys(todoStadisticsYear),
                            datasets: [{
                                label: 'Created',
                                data: Object.values(dataCreatedYear),
                                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                                borderColor: 'rgba(54, 162, 235, 1)',
                                borderWidth: 2
                            },
                            {
                                label: 'Completed',
                                data: Object.values(dataCompletedYear),
                                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                                borderColor: 'rgba(255, 99, 132, 1)',
                                borderWidth: 2
                            },
                            {
                                label: 'Deleted',
                                data: Object.values(dataDeletedYear),
                                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                                borderColor: 'rgba(75, 192, 192, 1)',
                                borderWidth: 2
                            }]
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false
                        }}
                        key={windowWidth}
                    />
                </div>
            </div>
        </div>
    )
}

export { Dashboard };