import { useDispatch, useSelector } from 'react-redux'
import { getIsCardInCart, getIsCartLoading, setCart, setIsCartLoading } from '../../store/cartSlice'
import CartActionButton from '../../ui/CartActionButton/CartActionButton'
import { StyledCard } from './Card.styled'
import { addProductToCart, getCart } from '../../api/cart'
import { getUserInfo } from '../../store/usersSlice'
import showNotification from '../Notification/notification-emitter'
import { ERROR_NOTIFICATION } from '../Notification/notification-type'
import Loader from '../Loader/Loader'
import Counter from '../../ui/Counter/Counter'

const Card = ({ id, title, preview, description, price }) => {
  const dispatch = useDispatch()
  const { id: userId } = useSelector(getUserInfo)
  const isLoading = useSelector(getIsCartLoading)
  const isCartInCart = useSelector((getIsCardInCart(id)))

  const updateCart = async () => {
    dispatch(setIsCartLoading(true))

    try {
      await addProductToCart(userId, id)
      const cart = await getCart(userId)
      dispatch(setCart(cart))
    } catch (error) {
      showNotification(error.response?.data?.message, ERROR_NOTIFICATION)
    } finally {
      dispatch(setIsCartLoading(false))
    }
  }

  const handleButtonClick = (e) => {
    e.preventDefault()
    updateCart()
  }

  return (
    <StyledCard>
      {isLoading && <Loader />}

      <img
        className="image"
        src={preview}
        width='270'
        height='271'
        alt={title}
      />
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <div className="purchase">
        <span className="price">{price} ₽</span>

        {isCartInCart
          ? <Counter
              productId={id}
              isCart={false}
            />
          : <CartActionButton
              onClick={handleButtonClick}
            />}

      </div>
    </StyledCard>
  )
}

export default Card