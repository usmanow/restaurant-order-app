import { StyledInput } from './Input.styled'

const Input = ({ value, onChange, name, placeholder, type, autoComplete }) => {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      type={type}
      autoComplete={autoComplete}
    >
    </StyledInput>
  )
}

export default Input