import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getProductsSelector,
  getTotalProducts,
  getIsProductsLoading,
  setProducts,
  setTotalProducts,
  setIsProductsLoading
} from '../../store/productsSlice'
import { Link, useNavigate } from 'react-router'
import Loader from '../../components/Loader/Loader'
import Card from '../../components/Card/Card'
import Pagination from '../../components/Pagination/Pagination'
import { StyledMain } from './Main.styled'
import { getProducts } from '../../api/products/index'
import { useAuthContext } from '../../context/authContext'
import showNotification from '../../components/Notification/notification-emitter'
import { ERROR_NOTIFICATION } from '../../components/Notification/notification-type'

const Main = ({ searchValue, page }) => {
  const products = useSelector(getProductsSelector)
  const totalProducts = useSelector(getTotalProducts)
  const isLoading = useSelector(getIsProductsLoading)
  const dispatch = useDispatch()

  const [isFirstLoad, setIsFirstLoad] = useState(true)
  const { token } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(setIsProductsLoading(true))
      setIsFirstLoad(false)

      try {
        const response = await getProducts(page, searchValue, token)
        dispatch(setProducts(response.goods))
        dispatch(setTotalProducts(response.total))
      } catch (error) {
        showNotification(error.response?.data?.message, ERROR_NOTIFICATION)
      } finally {
        dispatch(setIsProductsLoading(false))
      }
    }

    fetchProducts()
  }, [token, searchValue, page, dispatch])

  const handlePageChange = (newPage) => {
    navigate(`?query=${searchValue}&page=${newPage}`)
  }

  return (
    <StyledMain>
      <div className="inner container">
        {isLoading && <Loader />}

        {!isLoading && !isFirstLoad && !products.length && (
            <p className="no-results">Нет результатов</p>
        )}

        <ul className="product-list">
          {products.map((product) => (
            <Link to={`/good/${product.id}`} key={product.id}>
              <Card
                id={product.id}
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
          productsPerPage={4}
          onPageChange={handlePageChange}
        />

      </div>
    </StyledMain>
  )
}

export default Main