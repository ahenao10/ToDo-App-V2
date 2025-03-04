import React from "react";  

function useServerDashboard() {

    const [todoStadistics, setTodoStadistics] = React.useState([]);

    const URL = 'http://localhost:3001';

    React.useEffect(() => {
        fetch(`${URL}/stadistics`)
            .then(response => response.json())
            .then(data => setTodoStadistics(data))
            .catch(error => console.log(error))
    }, [])

    return ({
        todoStadistics
    })
}

export { useServerDashboard };