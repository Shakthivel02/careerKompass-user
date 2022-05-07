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
  overflow: auto;
  @media (max-width: 700px) {
    width: 100%;
  overflow: auto;
    height: auto;
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
  position: relative;
  z-index: 100;
  @media (max-width: 650px) {
    width: 100%;
    font-size:160%;
  }
`;

interface Header2props {
  fontSize?: string;
}
export const Header2 = styled.div<Header2props>`
  letter-spacing: 0px;
  color: #6d6d95;
  opacity: 1;
  text-align: center;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "30px")};
  font-weight: 600;
  position: relative;
  z-index: 100;
  @media (max-width: 650px) {
    width: 100%;
    font-size:70%;
  }
`;

export const Body = styled.div`
  margin-top: 6rem;
`;
export const Para = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  width: 60%;
  @media (max-width: 650px) {
    width: 100%;
    font-size:70%;
  }
`;
export const StreamWrapper = styled.div`
  margin: 3rem 5rem;
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

export const LevelCard = styled(Button)`
  background-color: #0000000f;
  width: 12%;
  height: 56px;
  margin: 12px;
  margin-top: -8px;
  border-radius: 5px;
  border: none;
  position: relative;
  z-index: 100;
  color: black;
  &:hover,
  &:active,
  &:focus {
    background-color: #ff7b00;
    color: white;
  }
  @media (max-width: 600px) {
    width: 50%;
  }
`;

export const TestButton = styled(Button)`
  position: absolute;
  height: 35px;
  font-weight: 1000;
  font-family: "Montserrat", sans-serif;
  background: #8d8d9c;
  font-size: 14px;
  color: #ffffff;
  opacity: 1;
  border: none;
  :hover {
    background: #0f1043;
  }
  @media (max-width: 600px) {
  
  }
`;

