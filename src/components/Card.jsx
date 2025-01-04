import './Card.css'
import image from '../assets/images/product-1.png'

const Card = () => {
  return (
    <div className="card">
      <h2 className="card__title">Наименование товара</h2>
      <img
        className="card__image"
        src={ image }
        width='170'
        height='170'
        alt="product"
      />
      <p className="card__description">Описание товара</p>
      <span className="card__price">Цена товара</span>
      <button className="card__button">Купить</button>
    </div>
  )
}

export default Card