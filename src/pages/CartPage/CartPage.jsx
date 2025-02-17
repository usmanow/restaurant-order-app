import Header from '../../layouts/header/Header'
import Loader from '../../components/Loader/Loader'
import CartProduct from '../../components/CartProduct/CartProduct'
import Footer from '../../layouts/footer/Footer'
import { StyledMain } from './CartPage.styled'
import { useSelector } from 'react-redux'
import { getCartSelector, getIsCartLoading } from '../../store/cartSlice'
import { useEffect, useState } from 'react'

const CartPage = () => {
  const productList = useSelector(getCartSelector)
  const isLoading = useSelector(getIsCartLoading)
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  useEffect(() => {
    if (!isLoading) {
      setIsFirstLoad(false)
    }
  }, [isLoading])

  return (
    <>
      <Header
        showArrow={true}
        backgroundColor={true}
        title='Корзина'
        showInput={false}
        isNarrow={true}
      />

      <StyledMain>
        <div className="inner container_narrow">
          {isLoading && <Loader />}

          {!isLoading && !isFirstLoad && !productList.length && (
            <p className="no-results">Корзина пуста</p>
          )}

          <ul className='product-list'>
            {productList.map((product) => (
              <CartProduct
                key={product.id}
                productId={product.id}
                imgUrl={product.imgUrl}
                title={product.title}
                price={product.price}
              />
            ))}
          </ul>

        </div>
      </StyledMain>

      <Footer />
    </>
  )
}

export default CartPage