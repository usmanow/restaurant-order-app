import Header from '../../layouts/header/Header'
import Main from '../../layouts/main/Main'
import Footer from '../../layouts/footer/Footer'

const CartPage = () => {
  return (
    <>
      <Header
        showArrow={true}
        backgroundColor={true}
        title='Корзина'
      />
      <Main
        mainType='cart'
      />
      <Footer />
    </>
  )
}

export default CartPage