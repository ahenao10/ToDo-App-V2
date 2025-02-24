import React from "react"
import { useLocalStorage } from "./useLocalStorage";
import todoStadistics from '../Data/todoStadistics.json'

const TodoContext = React.createContext();

function TodoProvider({ children }) {

    const {
        loading,
        error,
        items: todosList,
        saveItem,
        // localStorageItem
    } = useLocalStorage('TodosV1', [])

    const [openModalAdd, setOpenModalAdd] = React.useState(false)
    const [openAddEmptyModal, setOpenAddEmptyModal] = React.useState(false)
    const [openOneCharModal, setOpenOneCharModal] = React.useState(false)
    const [openAddDescriptionModal, setOpenAddDescriptionModal] = React.useState(false)

    const [titleValue, setTitleValue] = React.useState('') // usado para asignar el titulo de la tarea cuando el modal de agregar tarea esta abierto
    const [descriptionValue, setDescriptionValue] = React.useState('') // usado para asignar la descripcion de la tarea cuando el modal de agregar tarea esta abierto
    const [searchValue, setSearchValue] = React.useState('') // usado para guardar temporalmente el valor escrito en el input de busqueda

    console.log(todosList)

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
        updateTodo.updateDate = updateDate
        newTodos[index] = updateTodo
        saveItem(newTodos)
    }

    const deleteTodos = (todoToRemove) => {

        const deleteDate = new Date()

        const index = todosList.findIndex(todo => todo.text === todoToRemove.text)
        const newTodos = [...todosList]
        newTodos.splice(index, 1) // Remove the todo from the list

        todoStadistics[deleteDate.getDay()].deleted += 1;
        
        saveItem(newTodos) // Save the new todo in the local storage
    }

    const addTodos = (text, description = '') => {

        const newTodos = [...todosList]
        console.log('addtodos', newTodos)   
        const creationDate = new Date()
        newTodos.push({
            text: text,
            completed: false,
            description: description,
            creationDate: creationDate.toUTCString()
        }) // Add a new todo with the text and the completed status

        todoStadistics[creationDate.getDay()].created += 1;

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
            // localStorageItem
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }