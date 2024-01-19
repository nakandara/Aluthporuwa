// Modal.jsx

import React from "react";
import ReactDOM from "react-dom";


const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modalOverlay">
      <div className="modalContent">
        {children}
       
      </div>
    </div>,
    document.body
  );
};

export default Modal;
