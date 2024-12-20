import React from "react";

function useLocalStorage(itemName, initialValue) {

    const [items, setItems] = React.useState(() => {
        const localStorageItem = localStorage.getItem(itemName)
        return localStorageItem ? JSON.parse(localStorageItem) : initialValue
    })

    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)

    React.useEffect(() => {
        setTimeout(() => {
            try {
                if (!localStorage.getItem(itemName)) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                }
                setLoading(false)
                console.log('TodoList cargada');
                
            } catch (error) {
                setLoading(false)
                setError(error)
            }
        }, 2000)

    }, [itemName, initialValue])

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItems(newItem)
    }

    return ({
        loading,
        error,
        items,
        saveItem
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