import { Button, Card, Figure } from "react-bootstrap";
import styled from "styled-components";

export const Logs = styled.img`
  width: 98%;
  position: absolute;
  height: 100px;
  display: flex;
`;

export const PageWrapper = styled.div`
  width: 100%;
`;
export const Text = styled.div`
  margin-top: 2;
  color: white;
  font-size: 20px;
  @media (max-width: 600px) {
    font-size: 10px;
    width: 100%;
    margin: 3% auto;
  }
`;

export const FinalFooter = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: rgb(68, 70, 212);
  width: 70%;
  margin-left: 10%;
  padding: 3%;
  border-radius: 17px;
  margin-top: 4%;
  @media (max-width: 600px) {
    margin: 5% auto;
    width: 100%;
  }
`;

interface ParaProps {
  marginTop?: string;
  color?: string;
  marginLeft?: string;
}

export const Para = styled.p<ParaProps>`
  font-family: "Open-Sans", sans-serif;
  font-weight: 550;
  line-height: 1.6;
  width: 50%;
 margin: 0 auto;
  color: ${({ color }) => (color ? color : "#000000")};
  @media (max-width: 600px) {
    margin: 0 auto;
    font-size: 9px;
    width: 100%;
  }
  @media (max-width: 1200px) {
    margin: 0 auto;
    font-size: 14px;
    font-weight: 550;
    width: 100%;
  }
`;
export const Paras = styled.p<ParaProps>`
  font-family: "Open-Sans", sans-serif;
  font-weight: 550;
  font-size: 15px;
  margin: auto 0;
  color: ${({ color }) => (color ? color : "black")};
  @media (max-width: 600px) {
    margin: 0 auto;
    font-size: 9px;
    width: 100%;
  }
  @media (max-width: 900px) {
    margin: 0 auto;
    font-size: 13px;
    width: 100%;
  }
`;

export const UListWrapper = styled.ul`
  margin: auto 0;
  line-height: 2;
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

export const ListText = styled.li`
  font-style: Bold;
  font-size: 17px;
  font-weight: 550;
  @media (max-width: 500px) {
    font-size: 12px;
  }
  @media (max-width: 900px) {
    font-size: 12px;
  }
`;

export const ContentPageLogo = styled(Figure.Image)`
  width: 70%;
  display: flex;
  justify-content: center;

  @media (max-width: 500px) {
    margin: auto 0;
  }
  @media (max-width: 900px) {
  }
`;

export const ContentLogo = styled(Figure.Image)`
  width: 40%;
  margin-left: 20%;
  @media (max-width: 600px) {
    margin: 0 auto;
    width: 100%;
  }
`;

export const CardLogo = styled(Figure.Image)`
  width: 98%;
`;

export const LastLogo = styled(Figure.Image)`
  width: 35%;
`;

export const SideTitles = styled.p`
  font-weight: 650;
  font-family: "Open-Sans", sans-serif;
  font-size: 16px;
  margin-top: 5px;
  float: right;
  color: #FF7B00;
  width: 100%;
  color: ${({ color }) => (color ? color : null)};
  @media (max-width: 600px) {
    font-size: 13px;
    line-height: 2;
    float: right;
  }
`;

export const Titles = styled.p`
  font-family: "Open-Sans", sans-serif;
  font-size: 12px;
  font-weight: 800;
  color: #ff7b00;
  text-align: center;
  opacity: 1;
  width: 100%;
  color: ${({ color }) => (color ? color : null)};
  @media (max-width: 600px) {
    font-size: 8px;
  }
`;

export const Heading = styled.p`
  font-family: "Open-Sans", "sans-serif";
  font-weight: 600;
  color: #43566d;
  align-items: center;
  text-align: center;
  opacity: 1;
  width: 100%;
  color: ${({ color }) => (color ? color : null)};
  @media (max-width: 600px) {
    font-size: 55%;
  }
`;

export const SubmitButton = styled(Button)`
  height: 35px;
  font-family: sans-serif;
  width: 100px;
  background: #ff7b00 0% 0% no-repeat padding-box;
  border: none;
  font-size: 14px;
  color: #ffffff;
  opacity: 1;
  margin-left: 30%;
  border-radius: 17px;
  &:hover,
  &:active,
  &:focus {
    background: #3335cf 0% 0% no-repeat padding-box;
  }
  @media (max-width: 600px) {
    font-size: 4px;
    height: fit-content;
    margin: 2% auto;
  }
`;
export const ViewButton = styled(Button)`
  width: 140px;
  background: #3335cf 0% 0% no-repeat padding-box;
  font-size: 12px;
  color: #ffffff;
  justify-content: space-around;
  opacity: 1;
  margin-left: 35%;
  &:hover,
  &:active,
  &:focus {
    background: #ff7b00 0% 0% no-repeat padding-box;
  }
  @media (max-width: 600px) {
    font-size: 9px;
    width: 60%;
  }
`;

export const DownloadButton = styled(Button)`
  height: 35px;
  width: 120px;
  background: #ff7b00 0% 0% no-repeat padding-box;
  border: none;
  font-size: 14px;
  color: #ffffff;
  opacity: 1;
  margin-top: 8%;
  &:hover,
  &:active,
  &:focus {
    background: #3335cf 0% 0% no-repeat padding-box;
  }
  @media (max-width: 600px) {
    font-size: 68%;
    width: 75%;
  }
`;

export const Buttons = styled(Button)`
  height: 35px;
  width: 120px;
  background: #ff7b00 0% 0% no-repeat padding-box;
  border: none;
  font-size: 14px;
  color: #ffffff;
  border-radius: 17px;
  opacity: 1;
  &:hover,
  &:active,
  &:focus {
    background: #3335cf 0% 0% no-repeat padding-box;
  }
  @media (max-width: 600px) {
    font-size: 4px;
    height: fit-content;
    margin: 2% auto;
  }
`;

export const FirstWrapper = styled.div`
  background-color: #fcfcff;
  width: 65%;
  margin-left: 4%;
`;

export const ThirdWrapper = styled.div`
  background-color: #f6f6fe;
  width: 30%;
  margin-top: -1.8%;
`;

export const Label = styled.div`
  color: #ff7b00;
  text-align: center;
  font-family: "cursive";
  font-size: 38px;
  padding-top: 2.5%;
  background: var(--unnamed-color-ff7b00) 0% 0% no-repeat padding-box;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Title = styled.div`
  color: #3335cf;
  font-family: normal normal bold 40px/60px Montserrat;
  font-size: 24px;
  font-weight: 700;
  margin-left: 7%;
  margin-top: 2%;
  @media (max-width: 600px) {
    font-size: 15px;
    margin: 0 auto;
  }
`;

export const LastTitles = styled.div`
  color: #000000;
  font-family: normal normal bold 40px/60px Montserrat;
  font-size: 19px;
  font-weight: 500;
  margin-left: 2%;
  margin-top: 2%;
`;

interface bold {
  fontSize?: string;
  fontWeight?: string;
}
export const Bold = styled.p<bold>`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "700")};
  color: #3335cf;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "25px")};
  font-family: normal normal bold 36px/60px Montserrat;
  z-index: 100;
  color: #3335cf;
  margin: auto 0;
  @media (max-width: 600px) {
    font-size: 13px;
    margin: auto 0;
    width: 100%;
  }
`;

export const FlexWrap = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #fff2e1;
  height: 110px;
  #logoWrapper {
    display: row;
    flex-direction: row;
    @media (max-width: 500px) {
      display: row;
      flex-direction: column;
    }
  }
`;

export const Sticky = styled.div`
  height: 200px;
  position: fixed;
`;

export const RelativeWrap = styled.div`
  position: relative;
  z-index: 1000;
  margin-left: 23%;
  margin-top: -50%;
  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const CareerKompass = styled(Figure.Image)`
  width: 40%;
  @media (max-width: 650px) {
    margin-bottom: 30%;
  }
`;

export const CardWrapper2 = styled(Card)`
  width: 98%;
  padding: 12px 32px 16px;
  @media (max-width: 500px) {
    width: 100%;
    margin: 0 auto;
    padding: 5px 5px 5px 5px;
  }
  @media (max-width: 900px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Recommanded = styled.div` 
float: left;
color: black;
font-size: 15px;
font-weight: 700;
@media (max-width: 500px) {
    width: 100%;
  font-size: 12px;
  }
  @media (max-width: 900px) {
    width: 100%;
  font-size: 12px;
   
  }
`

export const Paras2 = styled.p<ParaProps>`
  font-family: "Open-Sans", sans-serif; 
  font-size: 14px;
  padding: 10px 10px;
  margin: auto 0;
  color: ${({ color }) => (color ? color : "black")};
  @media (max-width: 600px) {
    margin: 0 auto;
    font-size: 9px;
    width: 100%;
  }
  @media (max-width: 900px) {
    margin: 0 auto;
    font-size: 13px;
    width: 100%;
  }
`;