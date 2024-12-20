import React from "react"
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {

    const {
        loading,
        error,
        items: todosList,
        saveItem
    } = useLocalStorage('TodosV1', [])

    const [openModalDelete, setOpenModalDelete] = React.useState(false)
    const [openModalAdd, setOpenModalAdd] = React.useState(false)

    const [searchValue, setSearchValue] = React.useState('')

    const searchedTodos = todosList.filter(
        todo => {

            const noTildes = (text) => {
                return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            };

            const todoText = noTildes(todo.text.toLowerCase());
            const searchText = noTildes(searchValue.toLowerCase());
            return todoText.includes(searchText)
        })

    const updateTodos = (updateTodo) => {
        const index = todosList.findIndex(todo => todo.text === updateTodo.text)
        console.log(index);

        const newTodos = [...todosList]
        newTodos[index] = updateTodo
        saveItem(newTodos)
    }

    const deleteTodos = (todoToRemove) => {
        const index = todosList.findIndex(todo => todo.text === todoToRemove.text)
        const newTodos = [...todosList]
        newTodos.splice(index, 1)
        saveItem(newTodos)
    }

    const addTodos = (text) => {
        const newTodos = [...todosList]
        newTodos.push({ text: text, completed: false })
        saveItem(newTodos)
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            openModalDelete,
            setOpenModalDelete,
            openModalAdd,
            setOpenModalAdd,
            setSearchValue,
            searchedTodos,
            updateTodos,
            deleteTodos,
            addTodos
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }