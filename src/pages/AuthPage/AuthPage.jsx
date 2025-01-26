import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import RegForm from '../../components/RegForm/RegForm'
import { StyledAuthPage } from './AuthPage.styled'

const AuthPage = () => {
  const [isLoginForm, setIsLoginForm] = useState(true)

  const toggleForm  = () => setIsLoginForm((prev) => !prev)

  return (
    <StyledAuthPage>
      {isLoginForm
        ? <LoginForm toggleForm={toggleForm} />
        : <RegForm toggleForm={toggleForm} />}
    </StyledAuthPage>
  )
}

export default AuthPage