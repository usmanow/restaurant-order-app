import { Link } from 'react-router'
import Card from '../../components/Card/Card'
import { StyledMain } from './Main.styled'
import products from '../../data/products'

const Main = ({ renderCards, mainType }) => {
  return (
    <StyledMain $mainType={mainType}>
      <div className="inner container">
        <ul className="product-list">

          {renderCards && products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <Card
                title={product.title}
                preview={product.preview}
                description={product.description}
                price={product.price}
              />
            </Link>
          ))}

        </ul>
      </div>
    </StyledMain>
  )
}

export default Main