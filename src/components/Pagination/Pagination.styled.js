import styled from 'styled-components'
import variables from '../../styles/variables'

export const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 15px;

  .pagination-button {
    height: 30px;
    width: 30px;
    border: ${variables.borders.default};
    border-radius: 5px;
    transition: ${variables.transitions.default};

    &:hover {
      background-color: ${variables.colors.accent};
    }

    &:disabled {
      background-color: ${variables.colors.accent};
    }
  }
`