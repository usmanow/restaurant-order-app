import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import Loader from '../../components/Loader/Loader'
import Card from '../../components/Card/Card'
import { StyledMain } from './Main.styled'
import { getGoods } from '../../api/goods/index'

const Main = ({ mainType }) => {
  const [loading, seLoading] = useState(false)
  const [goods, setGoods] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    if (mainType === 'cart') return

    const fetchGoods = async () => {
      try {
        seLoading(true)
        const goodsData = await getGoods()
        setGoods(goodsData)
      } catch (error) {
        const errorMessage = error.response.data.message
        setError(errorMessage)
        console.error(error)
      } finally {
        seLoading(false)
      }
    }

    fetchGoods()
  }, [mainType])

  return (
    <StyledMain $mainType={mainType}>
      {loading && <Loader />}
      <div className="inner container">

        {error && <div className="error-message">{error}</div>}

        <ul className="product-list">

          {mainType !== 'cart' && goods.map((good) => (
            <Link to={`/good/${good.id}`} key={good.id}>
              <Card
                title={good.title}
                preview={good.preview}
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