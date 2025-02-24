import React from "react";


function useLocalStorage(itemName, initialValue) {

    const URL = 'http://localhost:3001';

    const [items, setItems] = React.useState([]);

    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    
    const [itemToSave, saveItem] = React.useState(null);

    React.useEffect(() => {
        setTimeout(() => {
            fetch(`${URL}/todos`)
                .then(response => response.json())
                .then(data => setItems(data))
                .then(setLoading(false))
                .catch(error => setError(error))
        }, 2000)
    }, [])

    console.log(items)

    // const localStorageItem = localStorage.getItem(itemName);

    // const [items, setItems] = React.useState(() => {
    //     return localStorageItem ? JSON.parse(localStorageItem) : initialValue
    // })



    // React.useEffect(() => {
    //     setTimeout(() => {
    //         try {
    //             if (!localStorage.getItem(itemName)) {
    //                 localStorage.setItem(itemName, JSON.stringify(initialValue));
    //             }
    //             setLoading(false);

    //         } catch (error) {
    //             setLoading(false);
    //             setError(error);
    //         }
    //     }, 2000)

    // }, [itemName, initialValue])

    React.useEffect(() => {
        if (itemToSave) {
            fetch(`${URL}/add-todos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(itemToSave)
            }).then(response => response.json())
            .then(data => setItems(data))
            .catch(error => setError(error))
        }
    }, [itemToSave])

    // const saveItem = (newItem) => {
    //     // localStorage.setItem(itemName, JSON.stringify(newItem));
    //     fetch(`${URL}/add-todos`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(newItem)
    //     }).then(response => response.json())
    //     .then(data => setItems(data))
    //     // setItems(newItem)
    // }

    return ({
        loading,
        error,
        items,
        saveItem,
        // localStorageItem
    })
}

export { useLocalStorage }

// const todoItemsTemp = [
//     { text: "Completar TodoSearch", completed: false },
//     { text: "Terminar la aplicacion de react", completed: false },
//     { text: "Estilizar componentes", completed: false },
//     { text: "Instalar Kali Linux", completed: false },
//     { text: "Dios mio, pero tengo que seguir", completed: false },
// ];

// localStorage.setItem('TodosV1', JSON.stringify(todoItemsTemp))

// localStorage.removeItem('TodosV1')