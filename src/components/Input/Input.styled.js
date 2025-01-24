import styled from 'styled-components'
import variables from '../../styles/variables'

const {colors, borders, transitions} = variables

export const StyledInput = styled.input`
  padding-left: 18px;
  height: 39px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.21;
  min-width: 100%;
  border: ${borders.default};
  border-radius: 61px;
  color: ${colors.darkBg};

  &::placeholder {
    transition: color ${transitions.default};
    color: ${colors.darkBg};
  }

  &:focus::placeholder {
    color: transparent;
  }
`