import React from "react"
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {

    const {
        loading,
        error,
        items: todosList,
        saveItem,
        localStorageItem
    } = useLocalStorage('TodosV1', [])

    const [openModalAdd, setOpenModalAdd] = React.useState(false)
    const [openAddEmptyModal, setOpenAddEmptyModal] = React.useState(false)
    const [openOneCharModal, setOpenOneCharModal] = React.useState(false)
    const [openAddDescriptionModal, setOpenAddDescriptionModal] = React.useState(false)
    const [openDashboard, setOpenDashboard] = React.useState(false)

    const [titleValue, setTitleValue] = React.useState('') // usado para asignar el titulo de la tarea cuando el modal de agregar tarea esta abierto
    const [descriptionValue, setDescriptionValue] = React.useState('') // usado para asignar la descripcion de la tarea cuando el modal de agregar tarea esta abierto
    const [searchValue, setSearchValue] = React.useState('') // usado para guardar temporalmente el valor escrito en el input de busqueda

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
        const index = todosList.findIndex(todo => todo.text === updateTodo.text || todo.description === updateTodo.description)
        const newTodos = [...todosList]
        const updateDate = new Date().toUTCString()
        updateTodo.date = updateDate
        newTodos[index] = updateTodo
        saveItem(newTodos)
    }

    const deleteTodos = (todoToRemove) => {
        const index = todosList.findIndex(todo => todo.text === todoToRemove.text)
        const newTodos = [...todosList]
        newTodos.splice(index, 1) // Remove the todo from the list
        saveItem(newTodos) // Save the new todo in the local storage
    }

    const addTodos = (text, description = '') => {
        console.log('todoText', text);
        console.log('todoDescription', description);
        
        
        const newTodos = [...todosList]
        const creationDate = new Date().toUTCString()
        newTodos.push({ text: text, completed: false, description: description, date: creationDate}) // Add a new todo with the text and the completed status
        saveItem(newTodos)  // Save the new todo in the local storage
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            openModalAdd,
            setOpenModalAdd,
            openAddEmptyModal,
            setOpenAddEmptyModal,
            openOneCharModal,
            setOpenOneCharModal,
            openAddDescriptionModal,
            setOpenAddDescriptionModal,
            openDashboard,
            setOpenDashboard,
            titleValue,
            setTitleValue,
            descriptionValue,
            setDescriptionValue,
            searchValue,
            setSearchValue,
            searchedTodos,
            updateTodos,
            deleteTodos,
            addTodos,
            todosList,
            localStorageItem
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }