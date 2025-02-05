import './Dashboard.css'

function Dashboard({ setOpenDashboard }) {
    return (
        <div className="dashboard-container">
            <h2>Dashboard</h2>
            <button onClick={()=>setOpenDashboard(false)}>close</button>
        </div>
    )
}

export { Dashboard };