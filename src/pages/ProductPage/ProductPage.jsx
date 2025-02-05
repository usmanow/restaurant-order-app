import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getGoodById } from '../../api/goods'
import { useAuthContext } from '../../context/authContext'
import Header from '../..//layouts/header/Header'
import Loader from '../../components/Loader/Loader'
import Button from '../../ui/Button/Button'
import { StyledProductPageWrapper } from './ProductPage.styled'
import { StyledProductInfo } from './ProductPage.styled'
import showNotification from '../../components/Notification/notification-emitter'
import { ERROR_NOTIFICATION } from '../../components/Notification/notification-type'

const ProductPage = () => {
  const [loading , setLoading] = useState(false)
  const [good, setGood] = useState({})
  const { goodId } = useParams()
  const { token } = useAuthContext()

  useEffect(() => {
    const fetchGood = async () => {
      setLoading(true)

      try {
        const goodData = await getGoodById(goodId, token)
        setGood(goodData)
      } catch (error) {
        showNotification(error.response.data.message, ERROR_NOTIFICATION)
      } finally {
        setLoading(false)
      }
    }

    fetchGood()
  }, [goodId, token])

  return (
    <StyledProductPageWrapper>

      <Header
        showArrow={true}
        backgroundColor={false}
        title=''
      />

      <StyledProductInfo>
        {loading && <Loader />}

        <div className="inner container">
          <div className="product">
            <img
              className="image"
              src={good.imgUrl}
              alt={good.title}
            />

            <div className="product-info">
              <h2 className="title">{good.title}</h2>
              <p className="description">{good.description}</p>

              <div className="purchase">
                <span className="price">{good.price} ₽</span>
                <Button
                  children='В корзину'
                  buttonType='placeOrder'
                  type='submit'
                  onClick={() => console.log('товар добавлен в корзину')}
                />
              </div>

            </div>
          </div>
        </div>
      </StyledProductInfo>
    </StyledProductPageWrapper>
  )
}

export default ProductPage