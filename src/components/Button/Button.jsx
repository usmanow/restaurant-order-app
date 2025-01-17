import styles from './Button.module.scss'

const Button = ({ title, onClick }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button