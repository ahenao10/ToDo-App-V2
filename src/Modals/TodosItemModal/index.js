import '../Modals.css';

function TodosItemModal({ setOpenModalDelete }) {
    return (
        <div className="modal-todos ">
            <h2>¡Ups!</h2>
            <p>Debes completar la tarea primero</p>
            <button
                className="button-modal"
                onClick={()=> setOpenModalDelete(false)}>Cerrar</button>
        </div>
    );
}

export { TodosItemModal };