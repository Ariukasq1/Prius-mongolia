import styled from "styled-components";
import { colors, dimensions } from "../styles";

const Input = styled.input`
  margin-bottom: 20px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #ddd;
  padding: 4px;
`;

const LoginFormWrapper = styled.div`
  h2 {
    text-align: center;
    font-size: 20px;
    margin-bottom: 30px;
    font-weight: 600;
  }

  input {
    font-size: 14px;
    background: #f5f5f5;
    padding: 20px 24px;
    border-radius: 8px;
    border: 0;
    height: 55px;
  }

  .info {
    color: #1e87f0;
    background-color: #d4e9ff;
    padding: ${dimensions.unitSpacing}px ${dimensions.coreSpacing}px;
    border: 1px solid #b8daff;
    border-radius: 5px;
    font-size: 13px;
    display: flex;
    align-items: center;
    margin: ${dimensions.unitSpacing}px 0 ${dimensions.coreSpacing}px;
  }

  .auth-divider {
    position: relative;
    height: 1px;
    margin: 32px 0;
    font-size: 14px;
    background: #eee;
    background: linear-gradient(
      90deg,
      rgba(225, 225, 225, 0) 0%,
      #e1e1e1 50%,
      rgba(225, 225, 225, 0) 100%
    );

    &:after {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      height: 10px;
      width: 34px;
      content: "or";
      background-color: #fff;
    }
  }

  button {
    height: 40px;
    margin-bottom: ${dimensions.coreSpacing}px;
  }

  .links {
    margin-top: ${dimensions.coreSpacing}px;
    text-align: center;
    font-size: 12px;

    > a {
      padding-left: 4px;
      transition: all ease 0.3s;
      color: #1e87f0;
    }
  }

  .forgot-password {
    text-align: right;
    display: block;
    font-size: 14px;
    color: #747474;
    margin-top: 5px;
    transition: all ease 0.3s;
    cursor: pointer;

    &:hover {
      color: #009300;
    }
  }

  form > span {
    margin-bottom: 30px;
    text-align: center;
    display: block;
    color: #7a7a7a;
    font-size: 15px;

    a {
      color: #009300;
      font-weight: 600;
      cursor: pointer;
    }
  }

  button {
    min-width: 210px;
    font-weight: 600;
    box-shadow: 0px 8px 20px rgba(0, 147, 0, 0.24),
      0px 2px 6px rgba(0, 147, 0, 0.16), 0px 0px 1px rgba(0, 147, 0, 0.08);
    margin: 0;
  }
`;

const Error = styled.label`
  color: ${colors.colorCoreRed};
  margin-top: ${dimensions.unitSpacing - 3}px;
  display: block;
  font-size: 12px;
`;

export { LoginFormWrapper, Input, Error };
