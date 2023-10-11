import React from "react";
import ReactDOM from "react-dom";
import { ModalProps } from "../../types/types";

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div
      className="modal-overlay"
      onClick={onClose}
      style={{ position: "absolute", width: "100%", height: "100%" }}
    >
      <div className="modal">{children}</div>
    </div>,
    document.body
  );
};

export default Modal;
