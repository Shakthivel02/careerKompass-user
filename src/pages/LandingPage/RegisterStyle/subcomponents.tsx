import { Button, Form, FormControl, InputGroup, Modal } from "react-bootstrap";
import styled from "styled-components";

export const RegisterModalDialog = styled(Modal)`
  display: flex !important;
  .modal-content {
    border: none;
    border-radius: 20px !important;
  }
`;

export const RegisterWrapper = styled.div`
  text-align: center;
  height: 570px;
  width: 750px;
  border-radius: 20px;
  border: none;
  padding: 20px;
  @media (max-width: 900px) {
    width: auto;
  }
  @media (max-width: 415px) {
    width: auto;
  }
`;


export const RegisterHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const RegisterLogo = styled.img`
  width: 90px;
  height: 35%;
  display: flex;
  margin: auto 20px;
  opacity: 1;
`;

export const RegisterLock = styled.img`
  width: 78px;
  height: 77px;
  display: flex;
  margin: auto 20px;
  background: transparent url("img/login.png") 0% 0% no-repeat padding-box;
`;

export const RegisterModalWrapper = styled.div`
  padding: 10px;
`;

export const RegisterTitleWrapper = styled.div`
  display: flex;
  // justify-content: space-between;
`;

export const RegisterTitle = styled.div`
  font-size: 23px;
   font-family: 'Montserrat', sans-serif; 
  font-weight: 800;
  letter-spacing: 0px;
  color: #0f1043;
  opacity: 1;
  text-align: left;
`;

export const RegisterHelperText = styled.div`
  font-size: 11px;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  display: flex;
  cursor: pointer;
  align-items: center;
  color: #0d154d;
  opacity: 1;
  margin-left: auto;
  span {
    color: #ff7900;
    padding: 5px;
  }
`;

export const RegisterBodyWrapper = styled(Form)`
  margin-top: 30px;
`;

export const RegisterInput = styled(InputGroup)`
  box-shadow: 1px 1px 5px lightgray;
  border: none;
  opacity: 1;
  margin: 10px 0 10px 0;
  width: 46%;
  .form-control:focus {
    box-shadow: none;
  }
`;

export const RegisterFormInput = styled(FormControl)`
  border: none;

  ::placeholder {
    color: #141A45;
   font-family: 'Montserrat', sans-serif; 
    text-transform: capitalize;
    font-weight: 500;
    opacity: 0.57;
    font-size: 11px;
  }
  .input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    color: red;
  }
`;

export const ModalRegisterButton = styled(Button)`
  margin-top: 20px;
  width: 150px;
  height: 35px;
  width: 100px;
  font-family: 'Montserrat', sans-serif; 
  background: #ff7b00 0% 0% no-repeat padding-box;
  border: none;
  font-size: 14px;
  color: #ffffff;
  opacity: 1;
  &:hover,
  &:active,
  &:focus {
    background: #ff7b00 0% 0% no-repeat padding-box;
  }
`;

export const Span = styled.div`
  border: none;
  display: flex;
  align-items: center;
  background: #eeeeff 0% 0% no-repeat padding-box;
  padding: 5px;
  text-transform: capitalize;
  opacity: 0.57;
  font-size: 12px;
`;
