import React from "react";
import "./TodoAddSearch.css"
import { TodoContext } from "../TodoContext";

function ToDoAddSearch() {

    const { setOpenModalAdd, setOpenOneCharModal, searchedTodos: todos, setOpenAddEmptyModal, setOpenAddDescriptionModal, searchValue, setSearchValue, addTodos, setTitleValue, countLetters } = React.useContext(TodoContext)

    const [tempText, setTempText] = React.useState('') // Temporal text to add a new todo, transmit the value to the button and the button to the addTodos function

    function validateOneCaracter() {
        const input = document.getElementById('search-input')
        if (!input.value) {
            setOpenAddEmptyModal(true)
            return
        } else if (input.value.length <= 2) {
            setOpenOneCharModal(true)
            return
        } else {
            addValueTodosOnClick()
            countLetters(input, 'letters-counter-add', 30)
        }
    };

    function captureValueOnChange(e) {
        setSearchValue(e.target.value)
        if (searchValue && todos.length === 0) {
            setTempText(e.target.value) // If the searchValue is not empty and the todos list is empty, the tempText will be the searchValue
            return
        }
        if (todos.length > 0) {
            setTempText('')
            return
        }
    };

    function addValueTodosOnClick() {

        if (!searchValue) {
            setOpenAddEmptyModal(true)
            return
        } else if (!tempText && todos.length > 0) {
            setOpenModalAdd(true)
            return
        }
        
        addTodos(tempText)
        setTempText('')

        const input = document.getElementById('search-input')

        input.value = ''
        setSearchValue('')
    };

    return (
        <div className="search-container">
            <input type="text" className="search-input" id="search-input" placeholder="Busca o añade una tarea"
                onChange={(e) => {
                    captureValueOnChange(e)
                    countLetters(e, 'letters-counter-add', 30)
                }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        validateOneCaracter()
                    }
                }}
                maxLength={30}
                size={30}
                autoComplete="off" />
            <span id="letters-counter-add">{`${searchValue.length}/${30}`}</span>
            <button
                onClick={() => {
                    setTitleValue(searchValue)
                    setOpenAddDescriptionModal(true) // Open the modal to add a description

                }}>+ Add</button>
        </div>
    )
}

export { ToDoAddSearch }