import React from 'react';
import '../Modals.css';
import './AddTodoDescription.css';
import { TodoContext } from '../../TodoContext';

function AddTodoDescription({ setOpenAddDescriptionModal, titleTodoValue = '', descriptionTodoValue = '' }) {

    const { setOpenAddEmptyModal, addTodos, setTitleValue, setDescriptionValue, todosList, updateTodos, countLetters, setSearchValue} = React.useContext(TodoContext)
    const [todoDate, setTodoDate] = React.useState('')

    React.useEffect(() => {
        const todoSelected = todosList.find(todo => todo.text === titleTodoValue || todo.description === descriptionTodoValue)
        if (todoSelected) {
            const date = new Date(todoSelected.updateDate || todoSelected.creationDate)
            setTodoDate(date.toLocaleString('es-ES', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }));
            return
        }
    }, [todosList, titleTodoValue, descriptionTodoValue])

    function addTodoButtonOnclick() {
        let titleTodo = document.getElementById('title').value;
        let descriptionTodo = document.getElementById('description').value;

        if (!titleTodo && !descriptionTodo) {
            setOpenAddEmptyModal(true)
            return
        }

        const foundTodo = todosList?.find(todo => todo.text === titleTodo || todo.description === descriptionTodo) // optional chaining operator

        if (foundTodo) {
            const todoToUpdate = { ...foundTodo, text: titleTodo, description: descriptionTodo }
            updateTodos(todoToUpdate)
        } else {
            addTodos(titleTodo, descriptionTodo)
        }

        setOpenAddDescriptionModal(false);
        setTitleValue('');
        setDescriptionValue('');
        setSearchValue('');
        document.getElementById('search-input').value = ''; // Clear the search input
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
            <span id="letters-counter-modal">{`${titleTodoValue.length}/${30}`}</span>
            <label htmlFor="description">Descripcion: </label>
            <textarea id="description" name="description" rows="4" cols="50" defaultValue={descriptionTodoValue}
                placeholder='Escribe una descripcion'
                onChange={(e) =>
                    countLetters(e, 'letters-counter-description', 250)
                }
                maxLength={250}
                size={250} />
            <span id="letters-counter-description">{`${descriptionTodoValue.length}/${250}`}</span>
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