import Button from '../../ui/Button/Button'
import CartButton from '../../ui/CartButton/CartButton'
import { StyledHeader } from './Header.styled'

const Header = () => {
  return (
    <StyledHeader>
      <div className="inner container">
        <h1 className="title">Наша продукция</h1>

        <div className="controls">
          <div className="order-info">
            <span className="product-quantity">3 товара</span>
            <span className="total-price">на сумму 3 500 ₽</span>
          </div>

          <CartButton />
          <Button
            children='Выйти'
            buttonType='logOut'
            type='button'
          />

        </div>
      </div>
    </StyledHeader>
  )
}

export default Header