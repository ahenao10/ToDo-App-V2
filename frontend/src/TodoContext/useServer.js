import React from "react";


function useServer(itemName, initialValue) {

    const URL = 'http://localhost:3001';

    const [items, setItems] = React.useState([]);

    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    
    const [itemToSave, saveItem] = React.useState({data: null, op: ''});

    React.useEffect(() => {
        setTimeout(() => {
            fetch(`${URL}/todos`)
                .then(response => response.json())
                .then(data => setItems(data))
                .then(setLoading(false))
                .catch(error => setError(error))
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

// const todoItemsTemp = [
//     { text: "Completar TodoSearch", completed: false },
//     { text: "Terminar la aplicacion de react", completed: false },
//     { text: "Estilizar componentes", completed: false },
//     { text: "Instalar Kali Linux", completed: false },
//     { text: "Dios mio, pero tengo que seguir", completed: false },
// ];

// localStorage.setItem('TodosV1', JSON.stringify(todoItemsTemp))

// localStorage.removeItem('TodosV1')