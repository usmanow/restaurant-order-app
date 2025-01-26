import styled from 'styled-components'
import variables from '../../styles/variables'

const { colors, borders, transitions } = variables

export const StyledRegForm = styled.form`
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

    &_confirm {
      top: 261px;
    }

    &_rules {
      top: 293px;
    }

    &_exists {
      bottom: 88px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`

export const CheckboxWrapper = styled.div`
  margin-bottom: 13px;
  min-width: 100%;

  .checkbox {
    display: none;
  }

  .label {
    display: flex;
    align-items: center;
    column-gap: 10px;
    font-size: 13px;
    font-weight: 300;
    color: ${colors.darkText};
    transition: color ${transitions.default};
    cursor: pointer;
    user-select: none;

    &:hover {
      color: ${colors.accent};
    }
  }

  .custom-checkbox {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border: ${borders.default};
    border-radius: 50%;
    cursor: pointer;
    transition: ${transitions.default};
  }

  .checkbox:checked + .label .custom-checkbox {
    background-color: ${colors.accent};
    border-color: ${colors.accent};
  }

  .custom-checkbox::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 10px;
    height: 10px;
    background-color: ${colors.lightText};
    border-radius: 50%;
    transition: transform ${transitions.default};
  }

  .checkbox:checked + .label .custom-checkbox::after {
    transform: translate(-50%, -50%) scale(1);
  }
`