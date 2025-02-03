import React from 'react';
import '../Modals.css';
import './AddTodoDescription.css';
import { TodoContext } from '../../TodoContext';

function AddTodoDescription({ setOpenAddDescriptionModal, titleTodoValue = '', descriptionTodoValue = '' }) {

    const { setOpenAddEmptyModal, addTodos, setTitleValue, setDescriptionValue, todosList, updateTodos } = React.useContext(TodoContext)
    const [todoDate, setTodoDate] = React.useState('')

    React.useEffect(() => {
        const todoSelected = todosList.find(todo => todo.text === titleTodoValue || todo.description === descriptionTodoValue)
        if (todoSelected){
            setTodoDate(todoSelected.date);
            return
        }
    },[todosList, titleTodoValue, descriptionTodoValue])    

    function addTodoButtonOnclick() {
        let titleTodo = document.getElementById('title').value;
        let descriptionTodo = document.getElementById('description').value;

        if (titleTodo === '' && descriptionTodo === '') {
            setOpenAddEmptyModal(true)
            return
        } else if (titleTodo === '') {
            setOpenAddEmptyModal(true)
            return
        } else if (todosList.find(todo => todo.text === titleTodo || todo.description === descriptionTodo)) { // If the todo is already in the list, update the todo
            updateTodos({ text: titleTodo, description: descriptionTodo })
            setOpenAddDescriptionModal(false)
            setTitleValue('')
            setDescriptionValue('')
            return
        } else { // If the todo is not in the list, add the todo
            addTodos(titleTodo, descriptionTodo)
            setOpenAddDescriptionModal(false)
            setTitleValue('')
            setDescriptionValue('')
            return
        }
    }

    return (
        <div className="modal-todos" id='add-todo-description'>
            <h2>Añadir descripcion del ToDo</h2>
            <label htmlFor="title">To-Do: </label>
            <input type="text" id="title" name="description" defaultValue={titleTodoValue} />
            <label htmlFor="description">Descripcion: </label>
            <textarea id="description" name="description" rows="4" cols="50" defaultValue={descriptionTodoValue} />
            <span id="todo-date">{`Ultima actualización: ${todoDate}`}</span>
            <div className="buttons-container">
                <button
                    className="close-modal"
                    onClick={() => {
                        setTitleValue('')
                        setDescriptionValue('')
                        setOpenAddDescriptionModal(false)
                    }}>Cerrar</button>
                <button
                    className="add-todo"
                    onClick={addTodoButtonOnclick}>Añadir</button>
            </div>
        </div>
    );
}

export { AddTodoDescription };