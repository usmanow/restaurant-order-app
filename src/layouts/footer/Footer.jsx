import Button from '../../ui/Button/Button'
import { StyledFooter } from './Footer.styled'
import variables from '../../styles/variables'

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
          bcgColor={variables.colors.accent}
          textColor={variables.colors.darkText}
          hoverBсgColor={variables.colors.darkBg}
          hoverColor={variables.colors.accent}
        />
      </div>
    </StyledFooter>
  )
}

export default Footer