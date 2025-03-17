import React from "react";

function useServer() {

    const URL = 'https://todo-app-v2-mlad.onrender.com';

    const [items, setItems] = React.useState();

    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    
    const [itemToSave, saveItem] = React.useState({data: null, op: ''});

    React.useEffect(() => {
        setTimeout(() => {
            fetch(`${URL}/todos`)
                .then(response => response.json())
                .then(data => setItems(data))
                .catch(error => setError(error))
                .finally(() => setLoading(false))
        }, 2000)
    }, [])

    React.useEffect(() => {
        if (itemToSave) {
            
            fetch(`${URL}/mod-todos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(itemToSave)
            }).then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setItems(data)
                } else {
                    setError(data)
                }
            })
            .catch(error => setError(error.message))
        }
        setError(false)
    }, [itemToSave])

    return ({
        loading,
        error,
        items,
        saveItem,
    })
}

export { useServer }