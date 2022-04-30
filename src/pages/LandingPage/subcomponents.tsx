import {
  Button,
  Card,
  Col,
  Figure,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
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
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Container1 = styled.div`
  width: 100%;
  height: 600px;
  background: url(${Backimage});
  background-position: center;
  background-size: cover;
  @media (max-width: 900px) {
    width: 100%;
    height: 400px;
  }
`;

export const ContainBImg = styled.img`
  height: 550px;
  position: relative;
  bottom: 32rem;
  left: 48rem;
  @media (max-width: 500px) {
  }
`;

export const ContainImg = styled.img`
  height: 330px;
  position: relative;
  bottom: 26.5rem;
  left: 11rem;
  @media (max-width: 500px) {
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
export const LoginButton = styled(Button)`
  letter-spacing: 0px;
  color: rgba(255, 123, 0, 1);
  text-transform: capitalize;
  font-family: "Montserrat";
  font-weight: bolder;
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
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #0f1043;
  @media (max-width: 600px) {
    font-size: 25px;
  }
`;

export const Body = styled.body`
  color: #6d6d95;
  font-size: 28px;
  background: none;
  margin-top: 5px;
  font-weight: 700;
  @media (max-width: 600px) {
    font-size: 25px;
  }
`;
export const Footer = styled.footer`
  font-size: 12px;
  width: 50%;
  margin-top: 10px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 500;
  @media (max-width: 600px) {
    width: 80%;
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
  font-weight: 600;
  padding: 10px 20px 10px 20px;
  &:hover,
  &:active,
  &:focus {
    background-color: #ff7b00;
  }
`;
export const Container2 = styled.div`
  width: 100%;
  height: 645px;
  z-index: 100;
  background-color: #fff2e1;
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
  }
`;
export const Details2 = styled.div`
  margin: 10vh 56vh;
  @media (max-width: 900px) {
    margin: auto;
    height: auto;
  }
`;
export const Header2 = styled.header`
  font-size: 33px;
  font-weight: 800;
  letter-spacing: 0px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: rgba(15, 16, 67, 1);
  text-align: center;

  @media (max-width: 600px) {
    margin: 0px auto;
    padding-top: 10px;
    text-align: center;
    font-size: 22px;
    width: 100%;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 13em;
  @media (max-width: 600px) {
    margin: 0px auto;
    width: 80%;
  }
  @media (max-width: 900px) {
    margin: 0px auto;
    width: 80%;
  }
`;
export const Body2 = styled.body`
  color: rgba(109, 109, 149, 1);
  font-size: 23px;
  margin-top: 5px;
  text-align: center;
  background: none;
  font-weight: 600;
  @media (max-width: 600px) {
    margin: 0px auto;
    text-align: center;
    font-size: 15px;
  }
`;
export const Cards = styled(Card)`
  background-color: #ffffff;
  margin: 20px;
  box-shadow: 0 1px 10px 0 lightgray;
  border-radius: 10px;
  border: none;
  width: 25%;
  height: 300px;

  @media (max-width: 600px) {
    width: auto;
    height: auto;
    :hover {
      background: #6c6ccf;
    }
  }
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    :hover {
      background: #6c6ccf;
    }
  }
  &:hover,
  &:active,
  &:focus {
    background: #3335cf 0% 0% no-repeat padding-box;
    color: white;
  }
`;
export const CardHeader = styled(Card.Header)`
  font-size: 25px;
  color: rgba(51, 53, 207, 1);
  text-transform: capitalize;
  opacity: 1;
  display: flex;
  justify-content: center;
  border: none;
  background: none;
  font-weight: bolder;
  ${Cards}:hover & {
    color: white;
  }
`;
export const CardBody = styled(Card.Body)`
  display: flex;
  justify-content: center;
  text-align-last: justify;
`;
export const CardFooter = styled(Card.Footer)`
  font-size: 12px;
  border: none;
  display: flex;
  background: none;
  text-align: center;
  padding: 4%;
  text-align-last: center;
  font-size: 14px;
  font-family: Arial;
  color: #000000;
  ${Cards}:hover & {
    color: white;
  }
`;

export const CareerKompas = styled(Figure.Image)`
  width: "50";
  height: "56";
`;

export const SecondImage = styled(Figure.Image)`
  width: "50";
  height: "56";
`;

export const ThirdImage = styled(Figure.Image)`
  width: "50";
  height: "56";
`;

export const Container3 = styled.div`
  width: 100%;
  height: 520px;
  background: url(${Backimage1});
  background-size: cover;
  background-position: fixed;
  @media (max-width: 600px) {
    width: 100%;
    margin: auto;
    height: auto;
  }
`;
export const Header3 = styled.header`
  font-size: 33px;
  font-weight: 800;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
    // height:auto;
  }
`;
export const Body3 = styled.img`
  color: #6d6d95;
  width: 27%;
  margin: 14vh 75vh;
  font-weight: 700;
  @media (max-width: 600px) {
    width: 80%;
    margin: 25px;
    height: auto;
  }
  @media (max-width: 900px) {
    width: 40%;
    margin: 14vh 40vh;
    height: auto;
  }
`;
export const Container4 = styled.div`
  height: 650px;
  position: relative;
  background-color: #fff2e1;
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
export const Details4 = styled.div`
  margin: 7vh 49vh;
  padding-top: 25px;
  @media (max-width: 600px) {
    margin: auto;
    height: auto;
  }
  @media (max-width: 900px) {
    margin: auto;
    height: auto;
  }
`;
export const Header4 = styled.header`
  font-size: 33px;
  font-weight: 800;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #0f1043;
  text-align: center;
  @media (max-width: 600px) {
    margin: 0px auto;
    text-align: center;
    font-size: 22px;
    width: 100%;
  }
`;
export const Body4 = styled.div`
  color: #6d6d95;
  font-size: 23px;
  font-weight: 700;
  text-align: center;
  @media (max-width: 600px) {
    margin: 0px auto;
    text-align: center;
    font-size: 15px;
  }
`;

export const Labels = styled.p`
  font-weight: 800;
  font-family: sans-serif;
  font-size: 15px;
  margin-top: 6%;
  color: #6d6d95;
  opacity: 1;
  width: 100%;
  color: ${({ color }) => (color ? color : null)};
`;

export const LastLabels = styled.p`
  font-weight: 800;
  font-family: sans-serif;
  font-size: 15px;
  margin-left: 14%;
  margin-top: 6%;
  color: #6d6d95;
  opacity: 1;
  width: 100%;
  color: ${({ color }) => (color ? color : null)};
`;

export const FirstLabels = styled.p`
  font-weight: 800;
  font-family: sans-serif;
  font-size: 15px;
  margin-left: 3.5%;
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
    background: #3335cf 0% 0% no-repeat padding-box;
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
export const Label = styled.div`
  color: rgba(109, 109, 149, 1);
  font-size: 13px;
  font-weight: 600;
  display: flex;
  cursor: pointer;
  justify-content: center;
  @media (max-width: 600px) {
    display: flex;
    cursor: pointer;
    justify-content: center;
    margin-left: 5px;
  }
`;
export const CardWrapper1 = styled.div`
  width: 100%;
  margin-left: 35px;
  @media (max-width: 600px) {
    margin: 0 auto;
    width: 100%;
    height: 1000px;
  }
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

export const FinalWrapper = styled.div`
  min-height: 900px;
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
export const Coll = styled(Col)`
  padding-left: 70px;
  @media (max-width: 600px) {
  }
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
    height: 90px;
    left: 5em;
    bottom: -39px;
    border-radius: 10px;
    margin: 0px auto;
    position: absolute;
    background-color: #3335cf;
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
export const Title = styled.div`
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
export const WWraper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
