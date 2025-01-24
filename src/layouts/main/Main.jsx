import Card from '../../components/Card/Card'
import { StyledMain } from './Main.styled'
import products from '../../data/products'

const Main = () => {
  return (
    <StyledMain>
      <div className="inner container">
        <ul className="product-list">

          {products.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              preview={product.preview}
              description={product.description}
              price={product.price}
            />
          ))}

        </ul>
      </div>
    </StyledMain>
  )
}

export default Main