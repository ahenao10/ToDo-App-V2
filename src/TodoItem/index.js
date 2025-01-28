import React from "react";
import "./TodoItem.css";
import { BsXSquareFill, BsCheckSquareFill } from "react-icons/bs"
import { TodoContext } from "../TodoContext";

function TodoItem({ text, description, completed, setTodos, deleteTodo }) {

    const { setOpenAddDescriptionModal, setTitleValue, setDescriptionValue } = React.useContext(TodoContext)

    return (
        <li className={`todo-item ${completed ? 'completed-todo' : ''}`}>
            <div>
                <BsCheckSquareFill
                    onClick={() => {
                        setTodos({ text: text, completed: !completed })
                    }}
                    className={`icon-check ${completed ? 'icon-check-completed' : ''}`} />
                <p onClick={() => {
                    setTitleValue(text)
                    setDescriptionValue(description)
                    setOpenAddDescriptionModal(true)
                }}>{text}</p>
            </div>
            <BsXSquareFill
                className="icon-delete"
                onClick={() => {
                    deleteTodo({ text, completed })
                }} />
        </li>
    );
};

export { TodoItem }