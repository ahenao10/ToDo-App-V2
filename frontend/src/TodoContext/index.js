import React from "react"
import { useServer } from "./useServer";

const TodoContext = React.createContext();

function TodoProvider({ children }) {

    const {
        loading,
        error,
        items: todosList,
        saveItem,
    } = useServer('TodosV1', [])

    const [openModalAdd, setOpenModalAdd] = React.useState(false)
    const [openAddEmptyModal, setOpenAddEmptyModal] = React.useState(false)
    const [openOneCharModal, setOpenOneCharModal] = React.useState(false)
    const [openAddDescriptionModal, setOpenAddDescriptionModal] = React.useState(false)

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

        const updateDate = new Date()
        const updatedTodo = { ...updateTodo, updateDate: updateDate }

        saveItem({ data: updatedTodo, op: 'update' })
    }

    const deleteTodos = (todoToRemove) => {

        // const deleteDate = new Date()

        // const index = todosList.findIndex(todo => todo.text === todoToRemove.text)
        // const newTodos = [...todosList]
        // newTodos.splice(index, 1) // Remove the todo from the list

        // todoStadistics[deleteDate.getDay()].deleted += 1;

        saveItem({data: todoToRemove, op: 'delete' }) // Save the new todo in the local storage
    }

    const addTodos = (text, description = '') => {

        const creationDate = new Date()
        const newTodo = {
            text: text,
            completed: false,
            description: description,
            creationDate: creationDate
        }

        saveItem({ data: newTodo, op: 'add' })
    }

    const countLetters = (event, spanId, limit) => {
        const input = event.target
        const lettersCounter = document.getElementById(spanId)
        if (input && lettersCounter) {
            lettersCounter.innerText = `${input.value.length}/${limit}`
        } else {
            lettersCounter.innerText = `${0}/${limit}` // If the input is not found,
            return
        }
    };

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
            countLetters
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }