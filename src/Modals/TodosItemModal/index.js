import '../Modals.css';

function TodosItemModal({ setOpenModalDelete }) {
    return (
        <div className="modal-todos ">
            <h2>¡Ups!</h2>
            <h1>Debes completar la tarea primero</h1>
            <button
                className="button-modal"
                onClick={()=> setOpenModalDelete(false)}>Cerrar</button>
        </div>
    );
}

export { TodosItemModal };