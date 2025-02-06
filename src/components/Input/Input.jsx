import { StyledInput } from './Input.styled'

const Input = ({ value, onChange, name, placeholder, type, autoComplete, inputType }) => {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      type={type}
      autoComplete={autoComplete}
      $inputType={inputType}
    >
    </StyledInput>
  )
}

export default Input