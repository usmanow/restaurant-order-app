import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router'
import Loader from '../../components/Loader/Loader'
import Card from '../../components/Card/Card'
import Pagination from '../../components/Pagination/Pagination'
import { StyledMain } from './Main.styled'
import { getGoods } from '../../api/goods/index'
import { useAuthContext } from '../../context/authContext'
import showNotification from '../../components/Notification/notification-emitter'
import { ERROR_NOTIFICATION } from '../../components/Notification/notification-type'

const Main = ({ mainType, searchValue, page }) => {
  const [loading, setLoading] = useState(false)
  const [goods, setGoods] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const [isFirstLoad, setIsFirstLoad] = useState(true)
  const { token } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (mainType === 'cart') return

    const fetchGoods = async () => {
      setLoading(true)
      setIsFirstLoad(false)

      try {
        const response = await getGoods(page, searchValue, token)
        setGoods(response.goods)
        setTotalItems(response.total)
      } catch (error) {
        showNotification(error.response?.data?.message, ERROR_NOTIFICATION)
      } finally {
        setLoading(false)
      }
    }

      fetchGoods()
  }, [mainType, token, searchValue, page])

  const handlePageChange = (newPage) => {
    navigate(`?query=${searchValue}&page=${newPage}`)
  }

  return (
    <StyledMain $mainType={mainType}>

      {loading && <Loader />}

      <div className="inner container">
        <ul className="product-list">

          {goods.map((good) => (
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

        {!loading && !isFirstLoad && !goods.length && (
          <p className="no-results">Нет результатов</p>
        )}

        {mainType === 'cart' && !goods.length && !loading && (
          <p className="no-results">Ваша корзина пуста</p>
        )}

        <Pagination
          currentPage={page}
          totalItems={totalItems}
          itemsPerPage={4}
          onPageChange={handlePageChange}
        />

      </div>
    </StyledMain>
  )
}

export default Main