import styled from 'styled-components'
import variables from '../../styles/variables'

const {colors, borders, transitions} = variables

export const StyledInput = styled.input`
  padding-inline: 18px;
  height: 39px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.21;
  border: ${borders.default};
  border-radius: 61px;
  color: ${props => props.$inputType === 'auth' ? colors.darkBg : colors.lightText};

  &::placeholder {
    transition: color ${transitions.default};
    color: ${props => props.$inputType === 'auth' ?  colors.darkBg : colors.lightText};
  }

  &:focus::placeholder {
    color: transparent;
  }
`