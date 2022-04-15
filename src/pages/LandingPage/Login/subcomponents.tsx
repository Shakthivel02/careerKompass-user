import {
  Button,
  FormCheck,
  FormControl,
  InputGroup,
  Modal,
  Form,
} from "react-bootstrap";
import styled from "styled-components";

export const ModalDialog = styled(Modal)`
  display: flex !important;
  .modal-content {
    border: none;
    border-radius: 20px !important;
  }
`;
export const ModalWrapper = styled.div`
  padding: 10px;
`;
export const LoginDialog = styled.div`
  width: 350px;
  height: 430px;
  text-align: center;
  border-radius: 20px;
  padding: 20px;
  background-color: #ffffff !important;
`;
export const LoginWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LoginHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LoginLogo = styled.img`
  width: 90px;
  height: 35%;
  display: flex;
  margin: auto 20px;
  opacity: 1;
`;

export const LockLogo = styled.img`
  width: 78px;
  height: 77px;
  display: flex;
  margin: auto 20px;
  background: transparent url("img/login.png") 0% 0% no-repeat padding-box;
`;

export const Title = styled.div`
  font-size: 23px;
  font-weight: 1000;
  letter-spacing: 0px;
  color: #0f1043;
  opacity: 1;
  text-align: left;
`;

export const HelperText = styled.div`
  font-size: 11px;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  display: flex;
  cursor: pointer;
  align-items: center;
  color: #141a45;
  opacity: 1;
  span {
    color: #ff7900;
    padding: 5px;
  }
`;

export const BodyWrapper = styled(Form)`
  margin-top: 30px;
`;

export const Input = styled(InputGroup)`
  box-shadow: 1px 1px 5px lightgray;
  border: none;
  margin-bottom: 20px;
  opacity: 1;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
`;

export const InputBox = styled(FormCheck)`
  border-radius: 5px;
  border: none;
  height: initial;
  width: initial;
`;

export const SubTitle = styled.div`
  font-size: 12px;
  font-weight: 800;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0px;
  color: #6d6d95;
  text-transform: capitalize;
  opacity: 0.67;
  margin-left: 3px;
  margin-top: 3px;
  text-align: left;
`;

export const FormInput = styled(FormControl)`
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

export const Forgot = styled.div`
  color: #6d6d95;
  font-size: 12px;
  cursor: pointer;
  font-weight: 1000;
  font-family: "Montserrat", sans-serif;
  text-align: right;
  text-transform: capitalize;
  opacity: 0.67;
  &:hover{
    color: #3e3e9e;
  }
`;

export const ModalLoginButton = styled(Button)`
  margin-top: 20px;
  width: 150px;
  height: 35px;
  font-weight: 1000;
  font-family: "Montserrat", sans-serif;
  width: 100px;
  background: #ff7b00 0% 0% no-repeat padding-box;
  border: none;
  font-size: 14px;
  color: #ffffff;
  opacity: 1;
  &:hover,
  &:active,
  &:focus{
    background: #ff7b00 0% 0% no-repeat padding-box;
  }
`;
