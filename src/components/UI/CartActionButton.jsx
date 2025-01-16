import styles from './CartActionButton.module.scss'

const CartActionButton = ({ onClick, buttonType, buttonTypeLine }) => {
  return (
    <button
      className={`
        ${styles.button}
        ${buttonType === 'remove' ? styles.button_remove : ''}
      `}
      onClick={onClick}
    >
      <span
        className={`
          ${styles.button__line}
          ${buttonTypeLine === 'remove' ? styles.button__line_remove : ''}
        `}
      >
      </span>
    </button>
  )
}

export default CartActionButton