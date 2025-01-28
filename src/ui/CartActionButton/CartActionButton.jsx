import { StyledCartActionButton } from './CartActionButton.styled'

const CartActionButton = ({ onClick }) => {
  return (
    <StyledCartActionButton onClick={onClick}>
      <span className="line"></span>
    </StyledCartActionButton>
  )
}

export default CartActionButton