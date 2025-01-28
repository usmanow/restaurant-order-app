import styled from 'styled-components'
import variables from '../../styles/variables'

const { colors, transitions } = variables

export const StyledLoginForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
  padding: 7px 20px 34px;
  min-width: 460px;
  background-color: ${colors.lightText};

  .toggle-form-btn {
    position: relative;
    margin-left: auto;
    height: 17px;
    font-size: 13px;
    font-weight: 500;
    line-height: 1.18;
    color: ${colors.accent};
    transition: color ${transitions.default};
    user-select: none;
    cursor: pointer;

    &:hover {
      &::after {
        width: 100%;
      }
    }

    &::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      translate: -50%;
      width: 0;
      height: 2px;
      background-color: ${colors.darkBg};
      transition: ${transitions.default};
    }
  }

  .title {
    margin-bottom: 21px;
    font-size: 31px;
    font-weight: 700;
    line-height: 1.22;
    text-transform: uppercase;
    color: ${colors.darkBg};
  }

  .field-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    margin-bottom: 48px;
    width: 100%;
  }

  .error {
    position: absolute;
    left: 38px;
    left: 8%;
    font-size: 11px;
    font-weight: 500;
    line-height: 1.25;
    color: ${colors.error};

    &_email {
      top: 152px;
    }

    &_password {
      top: 206px;
    }

    &_general {
      left: 50%;
      bottom: 88px;
      transform: translateX(-50%);
    }
  }
`