import { StyledCartProduct } from './CartProduct.styled'
import Counter from '../../ui/Counter/Counter'
import CartActionButton from '../../ui/CartActionButton/CartActionButton'
import { Link } from 'react-router'

const CartProduct = ({ imgUrl, price, title, productId }) => {
  return (
    <StyledCartProduct>
      <img
        src={imgUrl}
        width='132'
        height='132'
        alt={title}
      />

      <h1 className='title'>
        <Link to={`/good/${productId}`}>{title}</Link>
      </h1>

      <Counter />

      <div className="purchase">
        <span className='price'>{price} ₽</span>

        <CartActionButton
          isCart={true}
        />

      </div>
    </StyledCartProduct>
  )
}

export default CartProduct