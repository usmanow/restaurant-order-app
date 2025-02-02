import { useState, useEffect } from 'react'
import Input from '../Input/Input'
import Button from '../../ui/Button/Button'
import { StyledLoginForm } from './LoginForm.styled'
import errorMessages from '../../data/errorMessages'
import { login } from '../../api/auth'
import { useAuthContext } from '../../context/authContext'
import showNotification from '../Notification/notification-emitter'
import { ERROR_NOTIFICATION, SUCCESS_NOTIFICATION } from '../Notification/notification-type'

const LoginForm = ({ toggleForm }) => {
  const context = useAuthContext()

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    general: '',
  })

  const [touchedFields, setTouchedFields] = useState({
    email: false,
    password: false,
  })

  const inputChangeHandler = (e) => {
    const { name, value, type, checked } = e.target

    setFormValues((prevState) => ({ ...prevState, [name]: type === 'checkbox' ? checked : value }))
    setTouchedFields((prevState) => ({ ...prevState, [name]: true} ))
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!email) return errorMessages.emailRequired
    if (!emailRegex.test(email)) return errorMessages.invalidEmail
    return ''
  }

  const validatePassword = (password) => {
    if (!password) return errorMessages.passwordRequired
    return ''
  }

  useEffect(() => {
    if (touchedFields.email) {
      const error = validateEmail(formValues.email)
      setErrors((prevState) => ({ ...prevState, email: error }))
    }
  }, [formValues.email, touchedFields.email])

  useEffect(() => {
    if (touchedFields.password) {
      const error = validatePassword(formValues.password)
      setErrors((prevState) => ({ ...prevState, password: error }))
    }
  }, [formValues.password, touchedFields.password])

  const isFormValid =
    !Object.values(errors).some((error) => error) &&
    Object.values(formValues).every((value) => value)

  const submitHandler = (e) => {
    e.preventDefault()

    login(formValues.email, formValues.password)
      .then((response) => {
        context.login(response.data.token)
        showNotification('Вы авторизованы', SUCCESS_NOTIFICATION)
      })
      .catch((error) => {
        showNotification(error.response.data.message, ERROR_NOTIFICATION)
      })
  }

  return (
    <StyledLoginForm method='POST' noValidate onSubmit={submitHandler}>
      <button className="toggle-form-btn" type='button' onClick={toggleForm}>Зарегистрироваться</button>
      <h1 className="title">Вход</h1>

      <div className="field-wrapper">
        <Input
          value={formValues.email}
          onChange={inputChangeHandler}
          name='email'
          placeholder='Email'
          type='text'
          autoComplete='off'
        />
        <span className="error error_email">{errors.email}</span>

        <Input
          value={formValues.password}
          onChange={inputChangeHandler}
          name='password'
          placeholder='Пароль'
          type='password'
          autoComplete='off'
        />
        <span className="error error_password">{errors.password}</span>

      </div>

      <Button
        children='Войти'
        buttonType='form'
        type='submit'
        disabled={!isFormValid}
      />

    </StyledLoginForm>
  )
}

export default LoginForm