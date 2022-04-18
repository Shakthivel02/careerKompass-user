import { Button } from "react-bootstrap";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between; 
  width: 90%;
  margin: 20px auto;
  @media (max-width: 600px) {
    margin: 10px 0px 10px -10px;
    width: 100%;
  }
`;

export const LogoWrapper = styled.div`
  width: 120px;
  height: 35%;
  display: flex;
  margin: auto 6px;
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
`;

export const MenuContainer = styled.div`
  color: #0f1043;
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