import { useState, useEffect } from 'react'
import Input from '../Input/Input'
import Button from '../../ui/Button/Button'
import { StyledLoginForm } from './LoginForm.styled'
import errorMessages from '../../data/errorMessages'

const LoginForm = () => {
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
    const emailRegex = new RegExp(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/, 'gi')

    if (!email) return errorMessages.loginRequired
    if (!emailRegex.test(email)) return errorMessages.invalidEmail
    return ''
  }

  const validatePassword = (password) => {
    if (!password) return errorMessages.loginRequired
    if (password.length < 6) return errorMessages.passwordTooShort
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

    if (!isFormValid) return

    alert('Вы авторизованы')
  }

  return (
    <StyledLoginForm>
      <form className="form" method='POST' noValidate onSubmit={submitHandler}>
        <button className="toggle-form-btn" type='button'>Зарегистрироваться</button>
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

        <span className="error error_general">{errors.general}</span>

        <Button
          children='Войти'
          buttonType='form'
          type='submit'
          disabled={!isFormValid}
        />
      </form>
    </StyledLoginForm>
  )
}

export default LoginForm