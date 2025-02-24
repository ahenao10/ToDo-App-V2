import React from 'react';
import ReactDOM from 'react-dom';
import './Modals.css';

function Modals({ children }) {

    return ReactDOM.createPortal(
        <div className="modals">
            {children},
        </div>,
        document.getElementById('modals')
    )
}

export { Modals };