import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal__content">
        {children}
      </div>
    </div>,
    document.querySelector('#modal')
  );
}

export default Modal;
