import { StyledCartActionButton } from './CartActionButton.styled'

const CartActionButton = ({ onClick, isCart }) => {
  return (
    <StyledCartActionButton onClick={onClick} $isCart={isCart}>
      <span className="line"></span>
    </StyledCartActionButton>
  )
}

export default CartActionButton