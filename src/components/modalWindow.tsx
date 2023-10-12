import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

import "./modal.css";

interface ModalProps {
  messageText: string;
  open: boolean;
  onClose: () => void;
  onDelete: () => void; // Типизируем функцию delete
}

const Modal: React.FC<ModalProps> = ({
  messageText,
  open,
  onClose,
  onDelete,
}) => {
  if (!open) return null;

  const modalRoot = document.getElementById("modal-root"); // ID DOM-элемента для вставки модального окна

  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <h1 className="modal-title">{messageText}</h1>
        <h2 className="modal-warning">Это действие нельзя будет отменить.</h2>
        <button className="Btn" onClick={onClose}>
          Отмена
        </button>
        <button className="Btn active" onClick={onDelete}>
          Удалить
        </button>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
