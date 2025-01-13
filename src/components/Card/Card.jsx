import CartActionButton from '../UI/CartActionButton'
import styles from './Card.module.scss'

const Card = ({ image, title, description, price }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={require(`../../assets/images/${image}`)}
        width='270'
        height='271'
        alt={title}
      />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.purchase}>
        <span className={styles.price}>{price}</span>
        <CartActionButton />
      </div>
    </div>
  )
}

export default Card