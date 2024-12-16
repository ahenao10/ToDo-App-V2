import React from "react";
import "./TodoAddSearch.css"
import { TodoContext } from "../TodoContext";

function ToDoAddSearch() {

    const { setSearchValue } = React.useContext(TodoContext)

    return (
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Write the task"
                onChange={(e) => {
                    setSearchValue(e.target.value)
                }} />
            <button>+ Add</button>
        </div>
    )
}

export { ToDoAddSearch }