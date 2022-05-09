import { Button } from "react-bootstrap";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 80px;
position: -webkit-sticky;
position: sticky;
top: 0;
z-index: 1000;
background-color: #FFFFFF;
box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1);
margin: 0 auto;
@media (max-width: 600px) {
  margin: 10px 0px 10px -10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
`;

export const LogoWrapper = styled.div`
display: flex;
margin: auto 60px;
@media (max-width: 500px) {
  margin: auto 6px;
}
`;
export const Logo = styled.img`
margin: 0 auto;
width: 90px;
height: 35%;
display: flex;
margin: auto 12px;
`;

export const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
margin-right: 85px;
@media (max-width: 500px) {
  margin-right: 0px;
}
`;

export const LoginButton = styled(Button)`
letter-spacing: 0px;
color: rgba(255, 123, 0, 1);
text-transform: capitalize;
font-family: "Montserrat", sans-serif;
font-weight: 600;
font-size: 12px;
cursor: pointer;
padding: 5px 23px 5px 23px;
border-radius: 15px;
background-color: white;
box-shadow: 0px 0px 8px #888888;
border-color: blue;
justify-content: flex-end;
margin: 12px 15px 12px 12px;
`;

export const MenuContainer = styled.div`
color: #0f1043;
 font-family: 'Montserrat', sans-serif; 
text-transform: capitalize;
opacity: 1;
font-size: 12px;
cursor: pointer;
margin: 16px 2px;
font-weight: 700;
`;

export const HamburgerMenu = styled(Button)`
background: none;
border: none;
:hover {
  background: white;
  color: #3335cf;
}
font-size: 17px;
color: #3335cf;
`;