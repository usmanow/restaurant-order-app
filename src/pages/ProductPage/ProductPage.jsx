import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getProductById } from '../../api/products'
import { useAuthContext } from '../../context/authContext'
import Header from '../..//layouts/header/Header'
import Loader from '../../components/Loader/Loader'
import Button from '../../ui/Button/Button'
import { StyledProductPageWrapper } from './ProductPage.styled'
import { StyledProductInfo } from './ProductPage.styled'
import showNotification from '../../components/Notification/notification-emitter'
import { ERROR_NOTIFICATION } from '../../components/Notification/notification-type'
import { getIsCardInCart, getIsCartLoading, setCart, setIsCartLoading } from '../../store/cartSlice'
import { addProductToCart, getCart } from '../../api/cart'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo } from '../../store/usersSlice'
import Counter from '../../ui/Counter/Counter'

const ProductPage = () => {
  const [isLoading , setLoading] = useState(false)
  const [product, setProduct] = useState(null)
  const { goodId } = useParams()
  const { token } = useAuthContext()

  const productId = Number(goodId)

  const { id: userId } = useSelector(getUserInfo)
  const isCartInCart = useSelector((getIsCardInCart(productId)))
  const isCartLoading = useSelector(getIsCartLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true)

      try {
        const response = await getProductById(productId, token)
        setProduct(response)
      } catch (error) {
        showNotification(error.response?.data?.message, ERROR_NOTIFICATION)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [productId, token])


  const updateCart = async () => {
    dispatch(setIsCartLoading(true))

    try {
      await addProductToCart(userId, productId)
      const cart = await getCart(userId)
      dispatch(setCart(cart))
    } catch (error) {
      showNotification(error.response?.data?.message, ERROR_NOTIFICATION)
    } finally {
      dispatch(setIsCartLoading(false))
    }
  }

  return (
    <StyledProductPageWrapper>

      <Header
        showArrow={true}
        backgroundColor={false}
        title=''
        showInput={false}
      />

      <StyledProductInfo>
        <div className="inner container">

          {isLoading && <Loader />}

          {!isLoading && product && (
            <div className="product">
              <img className="image" src={product.imgUrl} alt={product.title} />

              <div className="product-info">
                <h2 className="title">{product.title}</h2>
                <p className="description">{product.description}</p>

                <div className="purchase">
                  <span className="price">{product.price} ₽</span>

                  {isCartLoading ? (
                      <Loader />
                    ) : isCartInCart ? (
                      <Counter isCart={false} productId={productId} />
                    ) : (
                      <Button
                        children="В корзину"
                        buttonType="placeOrder"
                        type="submit"
                        onClick={updateCart}
                      />
                    )}

                </div>
              </div>
            </div>
          )}
        </div>
      </StyledProductInfo>
    </StyledProductPageWrapper>
  )
}

export default ProductPage