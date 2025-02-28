import React from 'react';
import '../Modals.css';
import './AddTodoDescription.css';
import { TodoContext } from '../../TodoContext';

function AddTodoDescription({ setOpenAddDescriptionModal, titleTodoValue = '', descriptionTodoValue = '' }) {

    const { setOpenAddEmptyModal, addTodos, setTitleValue, setDescriptionValue, todosList, updateTodos, countLetters } = React.useContext(TodoContext)
    const [todoDate, setTodoDate] = React.useState('')

    React.useEffect(() => {
        const todoSelected = todosList.find(todo => todo.text === titleTodoValue || todo.description === descriptionTodoValue)
        if (todoSelected) {
            setTodoDate(todoSelected.updateDate || todoSelected.creationDate);
            return
        }
    }, [todosList, titleTodoValue, descriptionTodoValue])

    function addTodoButtonOnclick() {
        let titleTodo = document.getElementById('title').value;
        let descriptionTodo = document.getElementById('description').value;

        const foundTodo = todosList.find(todo => todo.text === titleTodo || todo.description === descriptionTodo)

        if (titleTodo === '' && descriptionTodo === '') {
            setOpenAddEmptyModal(true)
            return
        } else if (titleTodo === '') {
            setOpenAddEmptyModal(true)
            return
        } else if (foundTodo) { // If the todo is already in the list, update the todo
            const todoToUpdate = { ...foundTodo, text: titleTodo, description: descriptionTodo }
            updateTodos(todoToUpdate)
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
            <input type="text" id="title" name="description" defaultValue={titleTodoValue}
                placeholder='Escribe el titulo'
                onChange={(e) =>
                    countLetters(e, 'letters-counter-modal', 30)}
                maxLength={30}
                size={30}
                autoComplete='off' />
            <span id="letters-counter-modal">{`${0}/${30}`}</span>
            <label htmlFor="description">Descripcion: </label>
            <textarea id="description" name="description" rows="4" cols="50" defaultValue={descriptionTodoValue}
                placeholder='Escribe una descripcion'
                onChange={(e) =>
                    countLetters(e, 'letters-counter-description', 250)
                }
                maxLength={250}
                size={250} />
            <span id="letters-counter-description">{`${0}/${250}`}</span>
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