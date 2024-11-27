import "./TodoItem.css";

function TodoItem() {
    return (
        <div className="todo-item">
            <div>
                <input type="checkbox" />
                <p>Item 1</p>
            </div>
            <span>X</span>
        </div>
    )
}

export { TodoItem }