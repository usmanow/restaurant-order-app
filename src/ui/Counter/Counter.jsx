import { useDispatch, useSelector } from 'react-redux'
import { StyledCounter } from './Counter.styled'
import { getProductAmount, setCart, setIsCartLoading } from '../../store/cartSlice'
import { changeProductAmount, deleteProduct, getCart } from '../../api/cart'
import { getUserInfo } from '../../store/usersSlice'
import showNotification from '../../components/Notification/notification-emitter'
import { ERROR_NOTIFICATION } from '../../components/Notification/notification-type'
import { useState } from 'react'

const Counter = ({ isCart, productId }) => {
  const dispatch = useDispatch()
  const productAmount = useSelector(getProductAmount(productId))
  const { id: userId } = useSelector(getUserInfo)

  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  const updateCart = async () => {
    dispatch(setIsCartLoading(true))
    try {
      const updatedCart = await getCart(userId)
      dispatch(setCart(updatedCart))
    } catch (error) {
      showNotification(error.response?.data?.message, ERROR_NOTIFICATION)
    } finally {
      dispatch(setIsCartLoading(false))
      setIsButtonDisabled(false)
    }
  }

  const changeHandler = async (e, amount) => {
    e.preventDefault()

    if (isButtonDisabled) return
    setIsButtonDisabled(true)

    if (amount < 1) {
      await deleteProduct(userId, productId)
    } else {
      await changeProductAmount(userId, productId, amount)
    }

    await updateCart()
  }

  return (
    <StyledCounter $isCart={isCart}>
      <button
        className="counter-button"
        disabled={isButtonDisabled}
        onClick={(e) => changeHandler(e, productAmount - 1)}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </button>

      <span className="value">{productAmount}</span>

      <button
        className="counter-button"
        disabled={isButtonDisabled}
        onClick={(e) => changeHandler(e, productAmount + 1)}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </button>
    </StyledCounter>
  )
}

export default Counter