import { StyledButton } from './Button.styled'

const Button = ({ children, buttonType, type, disabled, onClick }) => {
  return (
    <StyledButton
      $buttonType={buttonType}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  )
}

export default Button