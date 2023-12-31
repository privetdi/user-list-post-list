import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'

import './modal.css'

interface ModalProps {
  messageText: string
  open: boolean
  onClose: () => void
  onDelete: () => void
}

const Modal: React.FC<ModalProps> = ({
  messageText,
  open,
  onClose,
  onDelete,
}) => {
  if (!open) return null

  const modalRoot = document.getElementById('modal-root')

  if (!modalRoot) return null

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement
    if (target.classList.contains('modal-overlay')) {
      onClose()
    }
  }

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content">
        <h1 className="modal-title">{messageText}</h1>
        <h2 className="modal-warning">Это действие нельзя будет отменить.</h2>
        <div className="btn-wrapper">
          <button className="Btn modal" onClick={onClose}>
            Отмена
          </button>
          <button className="Btn modal active" onClick={onDelete}>
            Удалить
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  )
}

export default Modal
