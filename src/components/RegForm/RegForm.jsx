import { useState, useEffect } from 'react'
import Input from '../Input/Input'
import Button from '../../ui/Button/Button'
import { StyledRegForm, CheckboxWrapper } from './RegForm.styled'
import errorMessages from '../../data/errorMessages'
import { registration } from '../../api/auth'
import showNotification from '../Notification/notification-emitter'
import { ERROR_NOTIFICATION, SUCCESS_NOTIFICATION } from '../Notification/notification-type'

const RegForm = ({ toggleForm }) => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    agreed: false,
  })

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    agreed: '',
    userExists: '',
  })

  const [touchedFields, setTouchedFields] = useState({
    email: false,
    password: false,
    passwordConfirm: false,
    agreed: false,
  })

  const inputChangeHandler = (e) => {
    const { name, value, type, checked } = e.target

    setFormValues((prevState) => ({ ...prevState, [name]: type === 'checkbox' ? checked : value }))
    setTouchedFields((prevState) => ({ ...prevState, [name]: true }))
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!email) return errorMessages.emailRequired
    if (!emailRegex.test(email)) return errorMessages.invalidEmail
    return ''
  }

  const validatePassword = (password) => {
    if (!password) return errorMessages.passwordRequired
    if (password.length < 6) return errorMessages.passwordTooShort
    return ''
  }

  const validatePasswordConfirm = (password, passwordConfirm) => {
    if (!passwordConfirm) return errorMessages.passwordConfirmRequired
    if (password !== passwordConfirm) return errorMessages.passwordMismatch
    return ''
  }

  const validateCheckbox = (checkbox) => {
    if (!checkbox) return errorMessages.checkboxRequired
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

  useEffect(() => {
    if (touchedFields.passwordConfirm) {
      const error = validatePasswordConfirm(formValues.password, formValues.passwordConfirm)
      setErrors((prevState) => ({ ...prevState, passwordConfirm: error }))
    }
  }, [formValues.password, formValues.passwordConfirm, touchedFields.password, touchedFields.passwordConfirm])

  useEffect(() => {
    if (touchedFields.agreed) {
      const error = validateCheckbox(formValues.agreed)
      setErrors((prevState) => ({ ...prevState, agreed: error }))
    }
  }, [formValues.agreed, touchedFields.agreed])

  const isFormValid =
    !Object.values(errors).some((error) => error) &&
    Object.values(formValues).every((value) => value)

  const submitHandler = async (e) => {
    e.preventDefault()

    try {
      await registration(formValues.email, formValues.password)
      showNotification('Успешная регистрация', SUCCESS_NOTIFICATION)
      toggleForm()
    } catch (error) {
      showNotification(error.response.data.message, ERROR_NOTIFICATION)
    }
  }

  return (
    <StyledRegForm method='POST' noValidate onSubmit={submitHandler}>
      <button className="toggle-form-btn" type='button' onClick={toggleForm}>Авторизоваться</button>

      <h1 className="title">Регистрация</h1>

      <div className="field-wrapper">
        <Input
          value={formValues.email}
          onChange={inputChangeHandler}
          name='email'
          placeholder='Email'
          type='text'
          autoComplete='off'
          inputType='auth'
        />
        <span className="error error_email">{errors.email}</span>

        <Input
          value={formValues.password}
          onChange={inputChangeHandler}
          name='password'
          placeholder='Пароль'
          type='password'
          autoComplete='off'
          inputType='auth'
        />
        <span className="error error_password">{errors.password}</span>

        <Input
          value={formValues.passwordConfirm}
          onChange={inputChangeHandler}
          name='passwordConfirm'
          placeholder='Подтвердите пароль'
          type='password'
          autoComplete='off'
          inputType='auth'
        />
        <span className="error error_confirm">{errors.passwordConfirm}</span>
      </div>

      <CheckboxWrapper>
        <input
          checked={formValues.agreed}
          onChange={inputChangeHandler}
          className="checkbox"
          name='agreed'
          type="checkbox"
          id='checkbox'
        />

        <label className="label" htmlFor="checkbox">
          <div className="custom-checkbox"></div>
          Я согласен получать обновления на почту
        </label>

        <span className="error error_rules">{errors.agreed}</span>
      </CheckboxWrapper>

      <Button
        children='Зарегистрироваться'
        buttonType='form'
        type='submit'
        disabled={!isFormValid}
      />
    </StyledRegForm>
  )
}

export default RegForm