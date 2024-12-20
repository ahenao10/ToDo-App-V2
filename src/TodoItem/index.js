import "./TodoItem.css";
import { BsXSquareFill, BsCheckSquareFill } from "react-icons/bs"

function TodoItem({ text, completed, setOpenModal, setOpenModalDelete ,setTodos, deleteTodo }) {
    return (
        <li className={`todo-item ${completed ? 'completed-todo' : ''}`}>
            <div>
                <BsCheckSquareFill
                    onClick={() => {
                        setTodos({ text: text, completed: !completed })
                    }}
                    className={`icon-check ${completed ? 'icon-check-completed' : ''}`} />
                <p>{text}</p>
            </div>
            <BsXSquareFill
                className="icon-delete"
                onClick={() => {
                    if (!completed) {
                        setOpenModalDelete(true)
                    } else {
                        deleteTodo({ text, completed })
                    }
                }} />
        </li>
    );
};

export { TodoItem }