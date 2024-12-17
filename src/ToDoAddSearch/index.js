import React from "react";
import "./TodoAddSearch.css"
import { TodoContext } from "../TodoContext";

function ToDoAddSearch() {

    const { searchedTodos: todos, setSearchValue, addTodos } = React.useContext(TodoContext)

    let [tempText, setTempText] = React.useState('')

    return (
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Write the task"
                onChange={(e) => {
                    setSearchValue(e.target.value)
                    if (e.target.value && todos.length === 0) {
                        setTempText(e.target.value)
                    }
                }} />
            <button
                onClick={() => addTodos(tempText)}>+ Add</button>
        </div>
    )
}

export { ToDoAddSearch }