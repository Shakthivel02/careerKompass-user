import { Button, Card, Figure, FormControl, InputGroup } from "react-bootstrap";
import styled from "styled-components";

export const Title = styled.p`
  margin-left: 43%;
  color: #0f1043;
  font-size: 40px;
  font-weight: 550;
  font-family: "Montserrat", sans-serif;
`;

interface ParaProps {
  marginTop?: string;
  color?: string;
  marginLeft?: string;
}
export const Para = styled.p<ParaProps>`
  font-family: "Montserrat", sans-serif;
  font-weight: 530;
  font-size: 20px;
  margin-left: 70%;
  width: 55%;
  margin-left: ${({ marginLeft }) => (marginLeft ? `${marginLeft}%` : "3%")};
  margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}%` : "0%")};
  color: ${({ color }) => (color ? color : "#000000")};
  margin: 3% auto;
  @media (max-width: 600px) {
    margin: 0 auto;
    font-size: 9px;
    width: 100%;
  }
`;

export const FlexWrap = styled.div`
  justify-content: space-around;
  width: 100%;
  height: 110px;
  #logoWrapper {
    display: row;
    flex-direction: row;
  }
`;

export const AboutImage = styled(Figure.Image)`
  width: 40%;
`;

export const CardContainer = styled(Card)`
  width: 45%;
  height: 100px;
  right: 23em;
  bottom: -50px;
  border-radius: 10px;
  position: absolute;
  background-color: #3335cf;
  @media (max-width: 600px) {
    width: 90%;
    height: auto;
    left: 1em;
    bottom: -34px;
    border-radius: 10px;
    margin: 0px auto;
    position: absolute;
    background-color: #3335cf;
  }
  @media (max-width: 900px) {
    width: 70%;
    height: 50px;
    left: 5em;
    bottom: -30px;
    border-radius: 10px;
    position: absolute;
    background-color: #3335cf;
  }
`;

export const WWraper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    margin: 5% auto;
    width: 100%;
  }
`;

export const Container4 = styled.div`
  height: 100px;
  position: relative;
  background-color: #fcfcff;
  @media (max-width: 600px) {
    width: auto;
    height: auto;
    margin-bottom: 10px;
  }
  @media (max-width: 900px) {
    width: auto;
    height: auto;
    margin-bottom: 10px;
  }
`;

export const Titles = styled.div`
  color: white;
  margin-top: 23px;
  padding: 15px;
  font-weight: 500;
  font-size: 17px;
  @media (max-width: 600px) {
    font-size: 12px;
    margin-top: 12px;
    padding: 15px;
    font-weight: 500;
  }
  @media (max-width: 900px) {
    font-size: 12px;
    margin: 30px auto;
    padding: 15px;
    font-weight: 500;
  }
`;

export const Input = styled(InputGroup)`
  width: 57%;
  height: 22px;
  margin-top: 33px;

  @media (max-width: 600px) {
    width: 40%;
    height: -20px;
    margin-top: 15px;
  }
  @media (max-width: 900px) {
    width: 50%;
    height: -20px;
    margin: 30px auto;
  }
`;

export const Form = styled(FormControl)`
  border-radius: 20px;
  border: none;
`;

export const ButtonS = styled(Button)`
  border-radius: 20px;
  background-color: #ff7b00;
  color: white;
  margin-left: -38px;
  border: none;
`;

export const PrivacyContainer = styled.div`
  background-color: #ebebf8;
  height: 300px;
  @media (max-width: 600px) {
    width: 100%;
    height: auto;
  }
  @media (max-width: 900px) {
    width: auto;
    height: auto;
  }
`;
export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 75px;
`;
export const Logo1 = styled.img`
  display: flex;
  width: 45%;
`;

export const BrandIcon = styled(Button)`
  background: none;
  font-size: 15px;
  margin: -5px;
  border: none;
  color: #8b8b99;
`;

export const FinalFooter = styled.div`
  font-size: 11px;
  padding: 6px 60px;
  color: rgba(103, 114, 148, 1);
  text-transform: capitalize;
  margin-top: 20px;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  background: #ebebf8;
  #footer-text {
    color: red;
  }
  @media (max-width: 600px) {
    padding: 6px 15px;
    margin-top: -0px;
  }
`;

export const FHeader = styled.div`
  padding: 10px;
  color: black;
  cursor: pointer;
  font-weight: 800;
  font-size: 13px;
`;
export const Links = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: rgba(138, 138, 138, 1);
  font-weight: 600;
  font-size: 13px;
`;

export const FinalWrapper = styled.div``;
