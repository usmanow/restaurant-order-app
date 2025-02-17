import { Link, useNavigate } from 'react-router'
import Input from '../../components/Input/Input'
import Button from '../../ui/Button/Button'
import CartButton from '../../ui/CartButton/CartButton'
import { StyledHeader } from './Header.styled'
import { useAuthContext } from '../../context/authContext'
import { useSelector } from 'react-redux'
import { getTotalPrice, getTotalProductsAmount } from '../../store/cartSlice'

const Header = ({
  showArrow,
  title,
  backgroundColor,
  showInput,
  searchValue,
  onSearchChange,
  isNarrow
}) => {
  const navigate = useNavigate()
  const { logOut } = useAuthContext()
  const totalAmount = useSelector(getTotalProductsAmount)
  const totalPrice = useSelector(getTotalPrice)

  return (
    <StyledHeader $backgroundColor={backgroundColor}>
      <div className={`inner container ${isNarrow ? 'container_narrow' : ''}`}>

        {showArrow &&
          (<button className="arrow-button" type='button' onClick={() => navigate(-1)}>
          <svg width="13" height="13" viewBox="0 0 9.60023 6.74902" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              id="Vector"
              d="M3.13 0.1C3.26 -0.04 3.48 -0.04 3.61 0.1C3.74 0.23 3.74 0.44 3.61 0.58L1.16 3.03L9.25 3.03C9.44 3.03 9.6 3.18 9.6 3.37C9.6 3.56 9.44 3.71 9.25 3.71L1.16 3.71L3.61 6.16C3.74 6.29 3.74 6.51 3.61 6.64C3.48 6.78 3.26 6.78 3.13 6.64L0.09 3.61C-0.04 3.48 -0.04 3.26 0.09 3.13L3.13 0.1Z"
              fill="#D58C51"
              fillOpacity="1"
              fillRule="nonzero"
            />
          </svg>
          </button>)}

        {title && <h1 className="title">{title}</h1>}

        {showInput &&
          <Input
            value={searchValue}
            onChange={onSearchChange}
            placeholder='Поиск'
            type='text'
            inputType='main'
          />}

        <div className="controls">
          <div className="order-info">
            <span className="product-quantity">{totalAmount} товара</span>
            <span className="total-price">
              на сумму <span className='price'>{totalPrice}</span>
            </span>
          </div>

          <Link to='/cart'>
            <CartButton totalQuantity={totalAmount} />
          </Link>

          <Button
            children='Выйти'
            buttonType='logOut'
            type='button'
            onClick={logOut}
          />

        </div>
      </div>
    </StyledHeader>
  )
}

export default Header