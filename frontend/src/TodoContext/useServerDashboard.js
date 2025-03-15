import React from "react";

function useServerDashboard() {

    const [todoStadisticsMonth, setTodoStadisticsMonth] = React.useState([]);
    const [todoStadisticsYear, setTodoStadisticsYear] = React.useState([]);

    const month = new Date().toLocaleString('es-CO', { month: 'short' });

    const URL = 'https://todo-app-v2-mlad.onrender.com';

    React.useEffect(() => {
        fetch(`${URL}/stadistics`)
            .then(response => response.json())
            .then(data => {
                setTodoStadisticsYear(data)
                setTodoStadisticsMonth(data[month])
            })
            .catch(error => console.log(error))
    }, [month])

    return ({
        todoStadisticsMonth,
        todoStadisticsYear
    })
}

export { useServerDashboard };