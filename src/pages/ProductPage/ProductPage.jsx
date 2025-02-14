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

const ProductPage = () => {
  const [isLoading , setLoading] = useState(false)
  const [product, setProduct] = useState(null)
  const { goodId: productId } = useParams()
  const { token } = useAuthContext()

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
                  <Button
                    children='В корзину'
                    buttonType='placeOrder'
                    type='submit'
                    onClick={() => console.log('товар добавлен в корзину')}
                  />
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