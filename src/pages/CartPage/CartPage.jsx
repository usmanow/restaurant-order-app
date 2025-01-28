import Header from '../../layouts/header/Header'
import Main from '../../layouts/main/Main'
import Footer from '../../layouts/footer/Footer'

const CartPage = () => {
  return (
    <>
      <Header
        showArrow={true}
        title='Корзина'
      />
      <Main
        renderCards={false}
        mainType='cart'
      />
      <Footer />
    </>
  )
}

export default CartPage