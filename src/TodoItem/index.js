import "./TodoItem.css";

function TodoItem({ text, completed, setTodos }) {
    return (
        <li className={`todo-item ${completed && 'completed-todo'}`}>
            <div>
                <input type="checkbox"
                    onChange={(e) => { 
                        setTodos({ text, completed: e.target.checked})
                        console.log(e.target.checked);
                         
                        }} />
                <p>{text}</p>
            </div>
            <span>X</span>
        </li>
    );
};

export { TodoItem }