import { useSelector } from 'react-redux'
import Button from '../../ui/Button/Button'
import { StyledFooter } from './Footer.styled'
import { getTotalPrice } from '../../store/cartSlice'

const Footer = () => {
  const totalPrice = useSelector(getTotalPrice)

  return (
    <StyledFooter>
      <div className="inner container_narrow">
        <div className="order-info">
          <span className="order-title">Заказ на сумму:</span>
          <span className="order-price">{totalPrice}</span>
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