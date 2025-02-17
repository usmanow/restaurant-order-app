import styled from 'styled-components'
import variables from '../../styles/variables'
import backgroundImage from '../../assets/images/background-product-page.png'

export const StyledProductPageWrapper = styled.div`
  background-image:
    url(${backgroundImage}),
    linear-gradient(to bottom, rgb(22, 21, 22), rgb(23, 22, 23));
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
`

export const StyledProductInfo = styled.main`
  .inner {
    display: flex;
    height: calc(100vh - 316px);
  }

  .product {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 30px;
    min-width: 100%;
  }

  .image {
    max-width: 100%;
    height: auto;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    row-gap: 25px;
    width: 500px;
  }

  .title {
    max-width: 528px;
    font-size: 30px;
    font-weight: 500;
    line-height: 1.23;
    word-wrap: break-word;
    color: ${variables.colors.accent};
  }

  .description {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.21;
    max-width: 528px;
  }

  .purchase {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 40px;
    height: 42px;
  }

  .price {
    font-size: 23px;
    font-weight: 500;
    line-height: 1.21;
  }
`