import Button from '../../ui/Button/Button'
import { StyledFooter } from './Footer.styled'

const Footer = () => {
  return (
    <StyledFooter>
      <div className="inner container">
        <div className="order-info">
          <span className="order-title">Заказ на сумму:</span>
          <span className="order-price">6 220 ₽</span>
        </div>
        <Button
          children='Оформить заказ'
          buttonType='placeOrder'
          type='submit'
        />
      </div>
    </StyledFooter>
  )
}

export default Footer