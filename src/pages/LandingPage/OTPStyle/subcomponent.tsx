import { Button, Form, FormControl, InputGroup, Modal } from "react-bootstrap";
import styled from "styled-components";

export const OTPModalDialog = styled(Modal)`
  display: flex !important; 
  .modal-content {
    border: none;
    border-radius: 20px !important;
  }
`;

export const OTPWrapper = styled.div`
  text-align: center;
  width: 330px;
  height: auto; 
  border-radius: 20px;
  padding: 20px;
  background-color: #ffffff;
  @media (max-width: 900px) {
    width: auto;
  }
  @media (max-width: 415px) {
    width: auto;
  }
`;

export const OTPHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const OTPLogo = styled.img`
  width: 90px;
  height: 35%;
  display: flex;
  margin: auto 20px;
  opacity: 1;
`;

export const OTPLock = styled.img`
  width: 78px;
  height: 77px;
  display: flex;
  margin: auto 20px;
  background: transparent url("img/login.png") 0% 0% no-repeat padding-box;
`;

export const OTPTitleWrapper = styled.div`
  padding: 10px;
`;

export const OTPVerifyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OTPTitle = styled.div`
  font-size: 23px;
  font-weight: 1000;
  letter-spacing: 0px;
  color: #0f1043;
  opacity: 1;
  text-align: left;
`;

export const OTPHelperText = styled.div`
  font-size: 11px;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  display: flex;
  cursor: pointer;
  align-items: center;
  color: #0d154d; 
  opacity: 1;
  span {
    color: #ff7900;
    padding: 5px;
  }
`;

export const OTPBodyWrapper = styled(Form)`
  margin-top: 30px;
`;

export const OTPInput = styled(InputGroup)`
  box-shadow: 1px 1px 5px lightgray;
  border: none;
  margin-bottom: 20px;
  opacity: 1;
`;

export const OTPFormInput = styled(FormControl)`
  border: none;
  ::placeholder {
    color: #6d6d95;
    text-transform: capitalize;
    opacity: 0.57;
    font-size: 12px;
  }
  .input[type="text"] {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    color: red;
  }
`;

export const ResendButton = styled(Button)`
  height: 22px;
  width: 95px;
  font-size: 10px;
  display: flex;
  font-family: "Montserrat", sans-serif;
  justify-content: center;
  align-items: center;
  background: #2e3192 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0000000f;
  border-radius: 5px;
  opacity: 1;
  font-weight: 600;
  border: none;
`;
export const OTPSubmitButton = styled(Button)`
  margin-top: 20px;
  width: 150px;
  height: 35px;
  width: 100px;
  font-family: "Montserrat", sans-serif;
  background: #ff7b00 0% 0% no-repeat padding-box;
  border: none;
  font-size: 14px;
  font-weight: 1000;
  color: #ffffff;
  opacity: 1;
  &:hover,
  &:active,
  &:focus{
    background: #ff7b00 0% 0% no-repeat padding-box;
  }
`;
