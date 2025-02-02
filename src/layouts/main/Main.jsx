import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import Loader from '../../components/Loader/Loader'
import Card from '../../components/Card/Card'
import { StyledMain } from './Main.styled'
import { getGoods } from '../../api/goods/index'
import { useAuthContext } from '../../context/authContext'
import showNotification from '../../components/Notification/notification-emitter'
import { ERROR_NOTIFICATION } from '../../components/Notification/notification-type'

const Main = ({ mainType }) => {
  const [loading, seLoading] = useState(false)
  const [goods, setGoods] = useState([])
  const context = useAuthContext()

  useEffect(() => {
    if (mainType === 'cart') return

    const fetchGoods = async () => {
      try {
        seLoading(true)
        const goodsData = await getGoods('1', context.token)
        setGoods(goodsData.data.goods)
      } catch (error) {
        showNotification(error.response.data.message, ERROR_NOTIFICATION)
      } finally {
        seLoading(false)
      }
    }

    fetchGoods()
  }, [mainType, context.token])

  return (
    <StyledMain $mainType={mainType}>
      {loading && <Loader />}
      <div className="inner container">
        <ul className="product-list">

          {mainType !== 'cart' && goods.map((good) => (
            <Link to={`/good/${good.id}`} key={good.id}>
              <Card
                title={good.title}
                preview={good.img_url}
                description={good.description}
                price={good.price}
              />
            </Link>
          ))}

        </ul>
      </div>
    </StyledMain>
  )
}

export default Main