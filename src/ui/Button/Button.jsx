import { StyledButton } from './Button.styled'

const Button = ({ children, bcgColor, textColor, hoverBсgColor, hoverColor }) => {
  return (
    <StyledButton
      bcgColor={bcgColor}
      textColor={textColor}
      hoverBсgColor={hoverBсgColor}
      hoverColor={hoverColor}
    >
      {children}
    </StyledButton>
  )
}

export default Button