import { useState } from 'react'
import Header from '../../layouts/header/Header'
import Main from '../../layouts/main/Main'
import Footer from '../../layouts/footer/Footer'

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
      <Main
        mainType='cart'
      />
      <Footer
        totalPrice={totalPrice}
      />
    </>
  )
}

export default CartPage