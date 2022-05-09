import { Button, Card, Figure } from "react-bootstrap";
import styled from "styled-components";

export const Title = styled.p`
  margin-left: 45%;
  color: #0f1043;
  font-size: 40px;
  font-weight: 1000;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 650px) {
    width: 100%;
    height: 40px;
    margin-left:30%;
  }
`;

interface ParaProps {
  marginTop?: string;
  color?: string;
  marginLeft?: string;
}
export const Para = styled.p<ParaProps>`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 20px;
  //margin-left: %;
  width: 50%;
  //height: 20%;
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
  height: 100%;
  margin: 0 -2%;
  @media (max-width: 600px) {
    width: 50%;
    height: 180px;
    margin-left:20%;
  }
  
`;



export const Container4 = styled.div`
  height: 100px;
  position: relative;
  background-color: #fcfcff;
  @media (max-width: 580px) {
    width: 100%;
    height: 40px;
  }
`;


export const PrivacyContainer = styled.div`
  background-color: #ebebf8;
  height: 300px;
  @media (max-width: 580px) {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  @media (max-width: 900px) {
    width: auto;
    height: 300px;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 75px;
`;

export const Logo = styled.img`
height: 40%;
width:10%;
margin-left:93%;
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
   font-family: 'Montserrat', sans-serif; 
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

export const FinalWrapper = styled.div`
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 415px) {
    width: 98%;
  }
`;



export const FormCard = styled(Card)`
  display: flex;
  justify-content: space-around;
  z-index: 1000;
  margin-top: 3rem;
  background-color: rgb(51, 53, 207);
  width: 50%;
  height: 80px;
  @media (max-width: 415px) {
    width: 85%;
    margin-top: -3%;
  }
`;

export const FormCardContent = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const FormCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const FormCardInput = styled.input`
  margin-right: 4%;
  margin-top: 3%;
  height: 55%;
  width: 40%;
  border-radius: 20px;
  border: none;
  ::placeholder {
   font-family: 'Montserrat', sans-serif; 
    font-size: 12px;
    font-weight: 550;
  }
  @media (max-width: 650px) {
    width: 60%;
    height: 50%;
  }
`;
export const FormCardText = styled(Card.Body)`
  font-weight: 700;
   font-family: 'Montserrat', sans-serif; 
  color: white;
  margin: auto 0;
  padding-top: 4%;
  padding-left: 8%;
  @media (max-width: 800px) {
    font-size: 12px;
  }
`;

export const FormCardButton = styled.button`
  z-index: 1000;
  margin-top: 3.6%;
   font-family: 'Montserrat', sans-serif; 
  margin-left: 79%;
  text-align: center;
  position: absolute;
  height: 36%;
  width: 11%;
  border: none;
  font-size: 12px;
  border-radius: 20px;
  background-color: rgb(255, 123, 0);
  color: rgb(255, 242, 230);
  @media (max-width: 800px) {
    font-size: 10px;
    margin-right: 7%;
    margin-top: 5%;
    height:20px;
    width: 15%;
  }
`;