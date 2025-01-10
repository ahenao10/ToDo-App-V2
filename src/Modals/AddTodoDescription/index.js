import '../Modals.css';
import './AddTodoDescription.css';

function AddTodoDescription({ setOpenAddDescriptionModal }) {
    return (
        <div className="modal-todos" id='add-todo-description'>
            <h2>Añadir descripcion del ToDo</h2>
            <label htmlFor="title">To-Do: </label>
            <input type="text" id="title" name="description" />
            <label htmlFor="description">Descripcion: </label>
            <textarea id="description" name="description" rows="4" cols="50" />
            <div className="buttons-container">
                <button
                    className="close-modal"
                    onClick={() => setOpenAddDescriptionModal(false)}>Cerrar</button>
                <button
                    className="add-todo"
                    onClick={() => setOpenAddDescriptionModal(false)}>Añadir</button>
            </div>
        </div>
    );
}

export { AddTodoDescription };