import { StyledCartButton } from './CartButton.styled'
import CartIcon from '../../icons/CartIcon/CartIcon'

export const CartButton = () => {
  return (
    <>
      <StyledCartButton>
        <CartIcon />
        <span className="cart-count">3</span>
      </StyledCartButton>
    </>
  )
}

export default CartButton