import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getProducts,
  getTotalProducts,
  getIsLoading,
  setProducts,
  setTotalProducts,
  setIsLoading
} from '../../store/productsSlice'
import { Link, useNavigate } from 'react-router'
import Loader from '../../components/Loader/Loader'
import Card from '../../components/Card/Card'
import Pagination from '../../components/Pagination/Pagination'
import { StyledMain } from './Main.styled'
import { getGoods } from '../../api/goods/index'
import { useAuthContext } from '../../context/authContext'
import showNotification from '../../components/Notification/notification-emitter'
import { ERROR_NOTIFICATION } from '../../components/Notification/notification-type'

const Main = ({ searchValue, page }) => {
  const products = useSelector(getProducts)
  const totalProducts = useSelector(getTotalProducts)
  const loading = useSelector(getIsLoading)
  const dispatch = useDispatch()

  const [isFirstLoad, setIsFirstLoad] = useState(true)
  const { token } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchGoods = async () => {
      dispatch(setIsLoading(true))
      setIsFirstLoad(false)

      try {
        const response = await getGoods(page, searchValue, token)
        dispatch(setProducts(response.goods))
        dispatch(setTotalProducts(response.total))
      } catch (error) {
        showNotification(error.response?.data?.message, ERROR_NOTIFICATION)
      } finally {
        dispatch(setIsLoading(false))
      }
    }

      fetchGoods()
  }, [token, searchValue, page, dispatch])

  const handlePageChange = (newPage) => {
    navigate(`?query=${searchValue}&page=${newPage}`)
  }

  return (
    <StyledMain>
      {loading && <Loader />}

      <div className="inner container">

        {!loading && !isFirstLoad && !products.length && (
            <p className="no-results">Нет результатов</p>
        )}

        <ul className="product-list">
          {products.map((product) => (
            <Link to={`/good/${product.id}`} key={product.id}>
              <Card
                title={product.title}
                preview={product.img_url}
                description={product.description}
                price={product.price}
              />
            </Link>
          ))}
        </ul>

        <Pagination
          currentPage={page}
          totalProducts={totalProducts}
          ProductsPerPage={4}
          onPageChange={handlePageChange}
        />

      </div>
    </StyledMain>
  )
}

export default Main