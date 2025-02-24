import '../Modals.css';

function AddEmptyTodoModal({ setOpenAddEmptyModal }) {
    return (
        <div className="modal-todos">
            <h2>¡Ups!</h2>
            <p>Debes escribir algo en la barra de busqueda. Si no encuentras tu ToDo, da clic en Add para agregar lo escrito como un nuevo ToDo</p>
            <button
                className="button-modal"
                onClick={()=> setOpenAddEmptyModal(false)}>Cerrar</button>
        </div>
    );
}

export { AddEmptyTodoModal };