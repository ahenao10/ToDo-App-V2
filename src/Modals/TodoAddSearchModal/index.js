import '../Modals.css';;

function TodoAddSearchModal({ setOpenModalAdd }) {
    return (
        <div className="modal-todos">
            <h2>¡Ups!</h2>
            <h1>Aùn se encuentran conincidencias en la busqueda. Escribe el ToDo completo para poder ser añadido</h1>
            <button
                className="button-modal"
                onClick={()=> setOpenModalAdd(false)}>Cerrar</button>
        </div>
    );
}

export { TodoAddSearchModal };