import '../Modals.css';

function TodoAddSearchModal({ setOpenModalAdd }) {
    return (
        <div className="modal-todos">
            <h2>¡Ups!</h2>
            <p>Aún se encuentran coincidencias en la busqueda. Escribe el ToDo completo para que pueda ser añadido</p>
            <button
                className="button-modal"
                onClick={()=> setOpenModalAdd(false)}>Cerrar</button>
        </div>
    );
}

export { TodoAddSearchModal };