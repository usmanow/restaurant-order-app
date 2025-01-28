import CartActionButton from '../../ui/CartActionButton/CartActionButton'
import { StyledCard } from './Card.styled'

const Card = ({ title, preview, description, price }) => {
  const handleButtonClick = (e) => {
    e.preventDefault()

    console.log(`товар ${title} добавлен в корзину`)
  }

  return (
    <StyledCard>
      <img
        className="image"
        src={require(`../../assets/images/${preview}`)}
        width='270'
        height='271'
        alt={title}
      />
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <div className="purchase">
        <span className="price">{price}</span>

        <CartActionButton onClick={handleButtonClick} />

      </div>
    </StyledCard>
  )
}

export default Card