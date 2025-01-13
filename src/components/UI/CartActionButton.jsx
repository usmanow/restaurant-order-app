import styles from './CartActionButton.module.scss'

const CartActionButton = ({onClick, buttonRemove, iconRemove}) => {
  return (
    <button
      className={`${styles.button} ${buttonRemove}`}
      onClick={onClick}
    >
      <span className={`${styles.button__icon} ${iconRemove}`}></span>
    </button>
  )
}

export default CartActionButton