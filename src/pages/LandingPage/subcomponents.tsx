import { Button, Card, Figure, Row } from "react-bootstrap";
import styled from "styled-components";
import Backimage from "../../assests/container1.jpg";
import Backimage1 from "../../assests/container3.jpg";

export const PageWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media (max-width: 415px) {
    width: 98%;
  }
`;

/*-------------------------------------container1------------------------------------------*/

export const Container1 = styled.div`
  width: 100%;
  height: 600px;
  background: url(${Backimage});
  background-position: center;
  background-size: cover;
  @media (max-width: 900px) {
    width: 100%;
    height: 450px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
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

export const Details = styled.div`
  margin: 23vh 12vh;
  @media (max-width: 900px) {
    margin: 5vh 2vh;
    width: 90%;
  }
  @media (max-width: 415px) {
    margin: 5vh 2vh;
    width: 90%;
  }
`;

export const Header = styled.header`
  font-size: 40px;
  font-weight: 900;
  font-family: 'Montserrat', sans-serif;
  color: #0f1043;
  @media (max-width: 500px) {
    font-size: 25px;
  }
  @media (max-width: 1000px) {
    font-size: 31px;
  }
`;

export const Body = styled.body`
  color: #6d6d95;
  font-size: 28px;
  background: none;
  margin-top: 5px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif; 
  @media (max-width: 450px) {
    font-size: 23px;
  }
  @media (max-width: 1000px) {
    font-size: 25px;
  }
`;

export const Footer = styled.footer`
  font-size: 14px;
  width: 50%;
  margin-top: 10px;
  font-family: 'Montserrat', sans-serif; 
  font-weight: 700;
  @media (max-width: 600px) {
    width: 80%;
  }
  @media (max-width: 1000px) {
    font-size: 12px;
  }
`;

export const Start = styled(Button)`
  margin-top: 20px;
  background-color: #ff7b00;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 12px;
  font-family: 'Montserrat', sans-serif; 
  font-weight: 600;
  padding: 10px 20px 10px 20px;
  &:hover,
  &:active,
  &:focus {
    background-color: #ff7b00;
  }
  @media (max-width: 600px) {
  }
`;

export const ContainBImg = styled.img`
  height: 550px;
  position: relative;
  bottom: 32rem;
  left: 48rem;
  @media (max-width: 1000px) {
    /* position: relative;
  left: 28rem;  */
  }
`;

export const ContainImg = styled.img`
  height: 330px;
  position: relative;
  bottom: 26.5rem;
  left: 11rem;
  @media (max-width: 1000px) {
    position: relative;
    height: 330px;
    bottom: 2rem;
    left: 16rem;
  }
`;

/*-------------------------------------container2------------------------------------------*/

export const Container2 = styled.div`
  width: 100%;
  height: 605px;
  z-index: 100;
  align-items: center;
  background-color: #fff2e1;
  @media (max-width: 1000px) {
    width: 100%;
    height: auto;
    z-index: 100;
  }
`;

export const Details2 = styled.div`
  margin: 3vh 50vh;
  @media (max-width: 450px) {
    margin: auto 0 10px 10px;
    height: auto;
  }
  @media (max-width: 1000px) {
    margin: 15px 0 10px 10px;
    height: auto;
  }
`;

export const Header2 = styled.header`
  font-size: 33px;
  font-weight: 800;
  font-family: 'Montserrat', sans-serif; 
  color: rgba(15, 16, 67, 1);
  text-align: center;

  @media (max-width: 450px) {
    margin: auto 0;
    padding: 10px 0px 0px 0px;
    text-align: center;
    font-size: 1px;
    width: 100%;
  }
  @media (max-width: 1000px) {
    margin: 0px auto;
    text-align: center;
    font-size: 25px;
  }
`;

export const Body2 = styled.body`
  color: rgba(109, 109, 149, 1);
  font-size: 22px;
  margin-top: 5px;
  text-align: center;
  font-family: 'Montserrat', sans-serif; 
  background: none;
  font-weight: 600;
  @media (max-width: 600px) {
    margin: 0px auto;
    text-align: center;
    font-size: 15px;
  }
  @media (max-width: 1000px) {
    margin: 0px auto;
    text-align: center;
    font-size: 16px;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 450px) {
    margin: 0px auto;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
  }
`;

export const Cards = styled(Card)`
  background-color: #ffffff;
  margin: 20px;
  box-shadow: 0 1px 10px 0 lightgray;
  border-radius: 10px;
  border: none;
  width: 21%;
  height: 330px;
  &:hover,
  &:active,
  &:focus {
    background: #3335cf 0% 0% no-repeat padding-box;
    color: white;
  }
  @media (max-width: 450px) {
    width: 50%;
    height: auto;
    :hover {
      background: #6c6ccf;
    }
  }
  @media (max-width: 1000px) {
    width: 50%;
    height: auto;
    :hover {
      background: #6c6ccf;
    }
  }
`;

export const CardHeader = styled(Card.Header)`
  font-size: 25px;
  color: rgba(51, 53, 207, 1);
  text-transform: capitalize;
  opacity: 1;
  display: flex; 
   font-family: 'Montserrat', sans-serif; 
  justify-content: center;
  border: none;
  background: none;
  font-weight: bolder;
  ${Cards}:hover & {
    color: white;
  }
  @media (max-width: 1000px) {
    font-size: 20px;
  }
`;

export const CardBody = styled(Card.Body)`
  display: flex;
  justify-content: center;
`;

export const CardFooter = styled(Card.Footer)`
  border: none;
  display: flex;
  background: none;
  text-align: center;
  padding: 4%;
  text-align-last: center;
  font-size: 13px;
  font-weight: 550;
  font-family: 'Montserrat', sans-serif; 
  color: #000000;
  ${Cards}:hover & {
    color: white;
  }
  @media (max-width: 900px) {
    font-size: 13px;
    color: black;
    font-weight: 550;
  }
`;

export const CareerKompas = styled(Figure.Image)`
  width: 40%;
  height: "56";
  @media (max-width: 900px) {
    width: 45%;
    height: "56";
  }
`;

export const SecondImage = styled(Figure.Image)`
  width: 40%;
  height: "56";
  @media (max-width: 900px) {
    width: 45%;
    height: "56";
  }
`;

export const ThirdImage = styled(Figure.Image)`
  width: 40%;
  height: "56";
  @media (max-width: 900px) {
    width: 45%;
    height: "56";
  }
`;

/*-------------------------------------container3------------------------------------------*/

export const Container3 = styled.div`
  width: 100%;
  height: auto;
  background: url(${Backimage1});
  background-size: cover;
  background-position: fixed;
  @media (max-width: 450px) {
    width: 100%;
    margin: auto;
    height: auto;
  }
  @media (max-width: 1000px) {
    width: 100%;
    height: auto;
    margin: auto;
  }
`;
export const Header3 = styled.header`
  font-size: 33px;
  font-weight: 800;
  font-family: 'Montserrat', sans-serif; 
  color: #0f1043;
  margin-top: 50px;
  text-align: center;
  @media (max-width: 600px) {
    margin: 10px auto;
    justify-content: center;
    text-align: center;
    // height:auto;
  }
  @media (max-width: 900px) {
    margin: 10px auto;
    justify-content: center;
    text-align: center;
    font-size: 25px;
  }
`;
export const Body3 = styled.img`
  color: #6d6d95;
  width: 27%;
  margin: 12vh 75vh;
  font-weight: 700;
  @media (max-width: 450px) {
    width: 80%;
    height: auto;
  }
  @media (max-width: 1000px) {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 5rem;
    text-align: center;
  }
`;

/*-------------------------------------container4------------------------------------------*/

export const Container4 = styled.div`
  height: 650px;
  position: relative;
  background-color: #fff2e1;
  @media (max-width: 580px) {
    width: 100%;
    height: 950px;
    //margin-bottom: 10px;
  }
`;

export const Details4 = styled.div`
  margin: auto 0;
  padding-top: 25px;
`;

export const Header4 = styled.header`
  font-size: 33px;
  font-weight: 800;
  font-family: 'Montserrat', sans-serif; 
  color: #0f1043;
  text-align: center;
  @media (max-width: 450px) {
    margin: 0 auto;
    text-align: center;
    font-size: 2px;
  }
  @media (max-width: 1000px) {
    margin: 0 auto;
    text-align: center;
    font-size: 25px;
  }
`;

export const Body4 = styled.div`
  color: #6d6d95;
   font-family: 'Montserrat', sans-serif; 
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  @media (max-width: 450px) {
    margin: 0px auto;
    text-align: center;
    font-size: 15px;
  }
  @media (max-width: 1000px) {
    margin: 0px auto;
    text-align: center;
    font-size: 16px;
  }
`;

export const CardWrapper1 = styled.div`
  width: 100%;
  margin-left: 35px;
  @media (max-width: 900px) {
    margin: 0 auto;
    width: 100%;
  }
`;

export const CardRow = styled(Row)`
  margin: 30px 30px 30px 30px;
  padding: 1rem 10rem;
  @media (max-width: 600px) {
    padding: 10px 10px 10px 10px;
    width: 100%;
  }
  @media (max-width: 900px) {
    padding: 10px 10px 10px 10px;
    width: 100%;
  }
`;

export const LastLabels = styled.p`
  font-weight: 600;
  font-family: 'Montserrat', sans-serif; 
  font-size: 15px;
  margin-left: 14%;
  margin-top: 6%;
  color: #6d6d95;
  opacity: 1;
  width: 100%;
  color: ${({ color }) => (color ? color : null)};
`;

export const GCard = styled(Card)`
  background-color: #ffffff;
  width: 95px;
  border-radius: 5px;
  box-shadow: 0 1px 10px 0 lightgray;
  border: none;
  margin: 5px;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  height: 95px;
  &:hover,
  &:active,
  &:focus {
    background: #3335cf 0% 0% no-repeat;
  }
  @media (max-width: 600px) {
    padding-top: 10px;
  }
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  :hover {
    background-color: #3335cf;
  }
  ${GCard}:hover & {
    color: white;
  }
  @media (max-width: 600px) {
    width: 50%;
    height: 50px;
  }
`;

export const Labels = styled.p`
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  margin-top: 6%;
  color: #6d6d95;
  opacity: 1;
  width: 100%;
  color: ${({ color }) => (color ? color : null)};
`;

export const FirstLabels = styled.p`
  font-weight: 600;
  font-family: 'Montserrat', sans-serif; 
  font-size: 15px;
  margin-left: 3.5%;
  margin-top: 6%;
  color: #6d6d95;
  opacity: 1;
  width: 100%;
  color: ${({ color }) => (color ? color : null)};
`;

/*-------------------------------------Subscribe Card Container------------------------------------------*/

export const FormCard = styled(Card)`
  display: flex;
  justify-content: space-around;
  z-index: 1000;
  margin-top: 7rem;
  background-color: rgb(51, 53, 207);
  width: 50%;
  height: 80px;
  /* @media (max-width: 900px) {
  width: 60%; 
  margin-top: 18%;
} */
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

/*-------------------------------------Footer------------------------------------------*/

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

export const FHeader = styled.div`
  padding: 10px;
   font-family: 'Montserrat', sans-serif; 
  color: black;
  cursor: pointer;
  font-weight: 800;
  font-size: 13px;
`;

export const Links = styled.div`
  display: flex;
   font-family: 'Montserrat', sans-serif; 
  flex-direction: column;
  padding: 2px 0px 5px 10px;
  color: rgba(138, 138, 138, 1);
  font-weight: 600;
  font-size: 13px;
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

export const FinalWrapper = styled.div`
  min-height: 900px;
`;

/*---------------------------------------------END----------------------------------------------------*/
