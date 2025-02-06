import { StyledCartButton } from './CartButton.styled'
import CartIcon from '../../icons/CartIcon/CartIcon'

export const CartButton = ({ totalQuantity }) => {
  return (
    <>
      <StyledCartButton>
        <CartIcon />
        <span className="cart-count">{totalQuantity}</span>
      </StyledCartButton>
    </>
  )
}

export default CartButton