import '../Modals.css';

function OneCharModal({ setOpenOneCharModal }) {
    return (
        <div className="modal-todos">
            <h2>¡Ups!</h2>
            <p>Un ToDo de 1 o 2 letras no es válido. Escribe el ToDo completo</p>
            <button
                className="button-modal"
                onClick={()=> setOpenOneCharModal(false)}>Cerrar</button>
        </div>
    );
}

export { OneCharModal };