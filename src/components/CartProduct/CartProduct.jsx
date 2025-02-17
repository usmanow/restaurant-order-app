import { StyledCartProduct } from './CartProduct.styled'
import Counter from '../../ui/Counter/Counter'
import CartActionButton from '../../ui/CartActionButton/CartActionButton'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo } from '../../store/usersSlice'
import { setCart, setIsCartLoading } from '../../store/cartSlice'
import { deleteProduct, getCart } from '../../api/cart'
import showNotification from '../Notification/notification-emitter'
import { ERROR_NOTIFICATION } from '../Notification/notification-type'

const CartProduct = ({ imgUrl, price, title, productId }) => {
  const dispatch = useDispatch()
  const { id: userId } = useSelector(getUserInfo)

  const removeHandler = async () => {
    dispatch(setIsCartLoading(true))

    try {
      await deleteProduct(userId, productId)
      const cart = await getCart(userId)
      dispatch(setCart(cart))
    } catch (error) {
      showNotification(error.response?.data?.message, ERROR_NOTIFICATION)
    } finally {
      dispatch(setIsCartLoading(false))
    }
  }

  return (
    <StyledCartProduct>
      <img
        src={imgUrl}
        width='132'
        height='132'
        alt={title}
      />

      <h1 className='title'>
        <Link to={`/good/${productId}`}>{title}</Link>
      </h1>

      <Counter
        isCart={true}
        productId={productId}
      />

      <div className="purchase">
        <span className='price'>{price} ₽</span>

        <CartActionButton
          isCart={true}
          onClick={removeHandler}
        />

      </div>
    </StyledCartProduct>
  )
}

export default CartProduct