import { Button } from "react-bootstrap";
import styled from "styled-components";
import Back1 from "../../assests/streamBack1.png";
import Back from "../../assests/streamBackGrounf.png";

export const LeftBack = styled.div`
  background: url(${Back1});
  background-position: center;
  background-size: 60rem;
  height: 100%;
  width: 70%;
  overflow-x: hidden;
  position: fixed;
  padding-top: 20px;
  right: 0;
`;

export const ContainerWrapper = styled.div`
  background: url(${Back});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  @media (max-width: 900px) {
    width: 100%;
    height: 100%;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-left: 50px;
  width: 90%;
  @media (max-width: 600px) {
    margin: 10px 0px 10px -10px;
    width: 100%;
  }
`;

export const Header1 = styled.div`
  letter-spacing: 0px;
  color: #0f1043;
  opacity: 1;
  text-align: center;
  font-size: 38px;
  font-weight: 900;
`;
export const Header2 = styled.div`
  letter-spacing: 0px;
  color: #6d6d95;
  opacity: 1;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
`;

export const Body = styled.div`
  margin-top: 6rem;
`;

export const StreamWrapper = styled.div`
  margin: 6rem 10rem;
  display: flex;
  justify-content: center;
  @media (max-width: 600px) {
    margin: 6rem 10rem;
    display: block;
    justify-content: center;
    width: 100%;
  }
  @media (max-width: 900px) {
    margin: 0 auto;
    margin-top: 70px;
    width: 100%;
  }
`;
export const StreamHeader = styled.div`
  letter-spacing: 0px;
  color: #0f1043;
  opacity: 1;
  width: 25%;
  text-align: center;
  font-size: 23px;
  font-weight: 600;
  @media (max-width: 600px) {
    text-align: center;
    width: 100%;
  }
  @media (max-width: 900px) {
    margin: 0 auto;
    width: 100%;
  }
`;

export const DropdownWrapper = styled.div`
  margin: auto 12px;
  width: 35%;
  box-shadow: 0 1px 10px 0 lightgray;
  #editable-dropdown {
    height: 100%;
  }
  @media (max-width: 600px) {
    display: inline;
    justify-content: center;
  }
  @media (max-width: 900px) {
    margin: auto 12px;
    width: 80%;
    margin-bottom: 3rem;
  }
`;

export const TestButton = styled(Button)`
  margin-top: 20px;
  margin: 0 auto;
  height: 35px;
  font-weight: 1000;
  font-family: "Montserrat", sans-serif;
  background: #ff7b00 0% 0% no-repeat padding-box;
  font-size: 14px;
  color: #ffffff;
  opacity: 1;
  border: none;
  &:hover,
  &:active,
  &:focus {
    background-color: #ff7b00;
  }
`;
