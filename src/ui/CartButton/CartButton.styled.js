import styled from 'styled-components'
import variables from '../../styles/variables'

export const StyledCartButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${variables.colors.accent};
  transition: opacity ${variables.transitions.default};

  &:hover {
    opacity: ${variables.hovers.default}
  }
`