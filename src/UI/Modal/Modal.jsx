import React from 'react';
import './Modal.css'

const Modal = ({active, children}) => {
    return (
        <div className={active ? "modal active" : "modal"}>
            <div className="modal__content" onClick={e => { e.stopPropagation()}}>
                {children}
            </div>
        </div>
    );
};

export default Modal;