import React from "react";
import ReactDOM from "react-dom";
import { ModalProps } from "../../types/types";
import Modal from "react-bootstrap/Modal";

const ModalWindow: React.FC<ModalProps> = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <Modal show={true} onHide={onClose} keyboard={true}>
      {children}
    </Modal>,
    document.body
  );
};

export default ModalWindow;
