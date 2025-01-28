import React from "react";
import "./TodoAddSearch.css"
import { TodoContext } from "../TodoContext";

function ToDoAddSearch() {

    const { setOpenModalAdd, setOpenOneCharModal, searchedTodos: todos, setOpenAddEmptyModal, setOpenAddDescriptionModal ,searchValue, setSearchValue, addTodos } = React.useContext(TodoContext)

    const [tempText, setTempText] = React.useState('') // Temporal text to add a new todo, transmit the value to the button and the button to the addTodos function

    function validateOneCaracter() {
        const input = document.getElementById('search-input')
        if (input && input.value.length <= 2) {
            setOpenOneCharModal(true)
            return
        } else {
            addValueTodosOnClick()
            countLetters()
        }
    }

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
    }

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

        if (input) {
            input.value = ''
            setSearchValue('')
        }
    }

    function countLetters() {
        const input = document.getElementById('search-input')
        const lettersCounter = document.getElementById('letters-counter')
        if (input && lettersCounter) {
            lettersCounter.innerText = `${input.value.length}/${30}`
        } else {
            lettersCounter.innerText = `${0}/${30}` // If the input is not found,
            return
        }
    }

    return (
        <div className="search-container">
            <input type="text" className="search-input" id="search-input" placeholder="Busca o añade una tarea"
                onChange={(e) => {
                    captureValueOnChange(e)
                    countLetters()
                }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        validateOneCaracter()
                    }
                }}
                maxLength={30}
                size={30}
                autoComplete="off" />
            <span id="letters-counter">{`${0}/${30}`}</span>
            <button
                onClick={() => {
                    // validateOneCaracter()
                    setOpenAddDescriptionModal(true) // Open the modal to add a description
                }}>+ Add</button>
        </div>
    )
}

export { ToDoAddSearch }



// "[{"text":"Alejo","completed":false},{"text":"Idiotitas","completed":false},{"text":"Idiotas mas grandes","completed":false},{"text":"Par de idiotas","completed":false},{"text":"Jajajaja","completed":false},{"text":"Epajeeee","completed":false},{"text":"Joda socio tu sabes ","completed":false,"description":"Vea pues llavesita"},{"completed":false,"description":"Kagala"}]"