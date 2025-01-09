import React from 'react'
import CartActionButton from '../UI/CartActionButton'
import styles from './Modal.module.scss'

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.inner}>
        <CartActionButton
          onClick={onClose}
          buttonRemove={styles.buttonRemove}
          iconRemove={styles.iconRemove}
        />
        <h2 className={styles.title}>{children}</h2>
      </div>
    </div>
  )
}

export default Modal