import { StyledButton } from './Button.styled'

const Button = ({ children, buttonType, type, disabled }) => {
  return (
    <StyledButton
      $buttonType={buttonType}
      type={type}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  )
}

export default Button