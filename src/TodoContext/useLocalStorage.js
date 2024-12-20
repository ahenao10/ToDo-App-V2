import React from "react";

function useLocalStorage(itemName, initialValue) {

    const [items, setItems] = React.useState(initialValue)

    React.useEffect(() => {

        const localStorageItem = localStorage.getItem(itemName)

        let parsedItem;

        if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parsedItem = initialValue
        } else {
            parsedItem = JSON.parse(localStorageItem)
            setItems(parsedItem)
        }
    }, [])

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItems(newItem)
    }

    return ({
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