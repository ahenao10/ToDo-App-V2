import React from "react";
import "./TodoAddSearch.css"
import { TodoContext } from "../TodoContext";

function ToDoAddSearch() {

    const { setOpenModalAdd, searchedTodos: todos, setOpenAddEmptyModal, searchValue, setSearchValue, addTodos } = React.useContext(TodoContext)

    const [tempText, setTempText] = React.useState('')

    return (
        <div className="search-container">
            <input type="text" className="search-input" id="search-input" placeholder="Write the task"
                onChange={(e) => {
                    setSearchValue(e.target.value)
                    if (searchValue && todos.length === 0) {
                        setTempText(e.target.value)
                        return
                    }
                    if (todos.length > 0){
                        setTempText('')
                        return
                    }
                }} />
            <button
                onClick={() => {
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
                }}>+ Add</button>
        </div>
    )
}

export { ToDoAddSearch }