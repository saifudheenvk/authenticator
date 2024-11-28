import { Button, Input } from "antd";
import styled from "styled-components";

export const AuthContainer = styled.div`
  width: 450px;
  min-height: 325px;
  background: var(--white-1);
  padding: 55px 55px 45px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  transition: all 0.3s;
`;

export const EnvirornmentDiv = styled.div`
  position: absolute;
  padding: 10px;
  color: var(--white-1);
  font-weight: 900;
`;


export const LoginButton = styled(Button)`
  color: var(--white-1);
  background-color: var(--primary-1);
  border-color: var(--primary-1);
  display: block;
  width: 100%;
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    color: var(--white-1);
    cursor: not-allowed;
    pointer-events: none;
    background-color: var(--primary-1);
    opacity: 0.5;
    border-color: var(--primary-1);
  }
`;


export const AuthInput = styled(Input)`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--gray-11);
  background-color: var(--white-1);
  background-clip: padding-box;
  border: 1px solid var(--white-17);
  border-radius: 0.25rem;
  outline: 0;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const AuthPassword = styled(Input.Password)`
  font-size: 1rem;
  line-height: 1.5;
  color: var(--gray-11);
  background-color: var(--white-1);
  background-clip: padding-box;
  border: 1px solid var(--white-17);
  border-radius: 0.25rem;
  outline: 0;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const ForgotPassword = styled.span`
  display: flex;
  padding-top: 10px;
  cursor: pointer;
  justify-content: flex-end;

  .arrow-right {
    margin-left: 2px;
    margin-top: 2px;
  }

  &:hover {
    color: var(--primary-1);
  }
`;
