import styled from 'styled-components'
import variables from '../../styles/variables'

const { colors, borders, transitions } = variables

export const StyledCard = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 9px;
  padding: 43px 21px 32px;
  max-width: 312px;
  min-height: 552px;
  border: ${borders.default};
  color: ${colors.lightText};
  cursor: pointer;

  &:hover {
    .title,
    .description,
    .price {
      color: ${colors.accent};
    }
  }

  .image {
    margin-bottom: 22px;
  }

  .title {
    font-size: 17px;
    font-weight: 500;
    line-height: 1.23;
    transition: color ${transitions.default};
  }

  .description {
    margin-top: auto;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.21;
    transition: color ${transitions.default};
  }

  .purchase {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    width: 100%;
    font-size: 17px;
    font-weight: 500;
    line-height: 1.23;
  }

  .price {
    transition: color ${transitions.default};
  }
`