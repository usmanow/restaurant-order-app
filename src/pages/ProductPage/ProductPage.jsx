import { useParams } from 'react-router'
import products from '../../data/products'

const ProductPage = () => {
  const { id } = useParams()

  const product = products.find((product) => product.id === Number(id))

  return (
    <div style={{ color: 'black', fontSize: '30px' }}>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  )
}

export default ProductPage