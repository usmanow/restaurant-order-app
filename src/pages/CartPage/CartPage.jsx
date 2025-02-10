import { useState } from 'react'
import Header from '../../layouts/header/Header'
import Footer from '../../layouts/footer/Footer'
import { StyledMain } from './CartPage.styled'

const CartPage = () => {
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  return (
    <>
      <Header
        showArrow={true}
        backgroundColor={true}
        title='Корзина'
        showInput={false}
        totalQuantity={totalQuantity}
        totalPrice={totalPrice}
      />

      <StyledMain>
        <div className="inner container">
          <p className="no-results">Корзина пуста</p>
        </div>
      </StyledMain>

      <Footer
        totalPrice={totalPrice}
      />
    </>
  )
}

export default CartPage