import React from "react"

const TodoContext = React.createContext();

function TodoProvider({ children }) {

    const todoItemsTemp = [
        {
            text: "Completar TodoSearch",
            completed: false
        },
        {
            text: "Terminar la aplicacion de react",
            completed: false
        },
        {
            text: "Estilizar componentes",
            completed: false
        },
        {
            text: "Instalar Kali Linux",
            completed: false
        },
        {
            text: "Dios mio, pero tengo que seguir",
            completed: false
        },
    ];

    const [todos, setTodos] = React.useState(todoItemsTemp)

    const [searchValue, setSearchValue] = React.useState('')

    const searchedTodos = todos.filter(
        todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText)
        })

    const updateTodos = (updateTodo) => {
        const index = todos.findIndex(todo => todo.text === updateTodo.text)
        const newTodos = [...todos]
        newTodos[index] = updateTodo
        setTodos(newTodos)
    }

    return (
        <TodoContext.Provider value={{
            setSearchValue,
            searchedTodos,
            updateTodos
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }