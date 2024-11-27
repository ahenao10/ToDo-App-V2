import "./TodoAddSearch.css"

function ToDoAddSearch () {
    return (
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Write the task"/>
            <button>+ Add</button>
        </div>
    )
}

export { ToDoAddSearch }