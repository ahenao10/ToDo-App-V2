import "./TodoItem.css";

function TodoItem() {
    return (
        <li className="todo-item">
            <div>
                <input type="checkbox" />
                <p>Item 1</p>
            </div>
            <span>X</span>
        </li>
    )
}

export { TodoItem }