import { Button, Card, Figure } from "react-bootstrap";
import styled from "styled-components";

export const Logo = styled.img`
  width: 14%;
`;
export const Logs = styled.img`
  width: 100%;
  position: absolute;
  height: 100px;
  display: flex;
`;

export const PageWrapper = styled.div`
  width:100%;
`;
export const Text = styled.div`
  margin-top: 2;
  color: white;
`;

export const FinalFooter = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: rgb(68, 70, 212);
  width: 70%;
  margin-left: 10%;
  padding: 1%;
`;

interface ParaProps {
  marginTop?: string;
  color?: string;
  marginLeft?: string;
}
export const Para = styled.p<ParaProps>`
  font-weight: 100%;
  font-family: "Open Sans", sans-serif;
  font-size: 17px;
  line-height: 1.6;
  width: 60%;
  margin-left: ${({ marginLeft }) => (marginLeft ? `${marginLeft}%` : "5%")};
  margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}%` : "0%")};
  color: ${({ color }) => (color ? color : "black")};
`;
export const Paras = styled.p<ParaProps>`
  font-weight: 100%;
  font-family: "Open Sans", sans-serif;
  font-size: 17px;
  line-height: 1.6;
  width: auto;
  margin-left: ${({ marginLeft }) => (marginLeft ? `${marginLeft}%` : "5%")};
  margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}%` : "0%")};
  color: ${({ color }) => (color ? color : "black")};
`;

export const UListWrapper = styled.ul`
  margin-left: 6%;
  line-height: 3;
`;

export const ListText = styled.li`
  font-style: italic;
  font-size: 16px;
`;

export const ContentPageLogo = styled(Figure.Image)`
  width: 18%;
  margin-left: 2%;
  height: fit-content;
`;

export const ContentLogo = styled(Figure.Image)`
  width: 40%;
  margin-left: 20%;
`;

export const CardLogo = styled(Figure.Image)`
  width: 70%;
`;

export const LastLogo = styled(Figure.Image)`
  width: 50%;
  margin-left: 25%;
`;

export const SideTitles = styled.p`
  font-weight: 600;
  font-family: sans-serif;
  font-size: 15px;
  margin-left: 5%;
  margin-top: 5%;
  color: #3335cf;
  opacity: 1;
  width: 100%;
  color: ${({ color }) => (color ? color : null)};
`;

export const Titles = styled.p`
  font-family: Bold;
  font-size: 20px;
  font-weight: 700;
  color: #000000;
  margin-left: 15%;
  margin-top: 10%;
  opacity: 1;
  width: 100%;
  color: ${({ color }) => (color ? color : null)};
`;

export const Heading = styled.p`
  font-family: Bold;
  font-weight: 600;
  color: #43566d;
  align-items: center;
  margin-left: 20%;
  opacity: 1;
  width: 100%;
  color: ${({ color }) => (color ? color : null)};
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
  margin-left: 40%;

  &:hover,
  &:active,
  &:focus {
    background: #3335cf 0% 0% no-repeat padding-box;
  }
`;
export const ViewButton = styled(Button)`
  height: 35px;
  width: 120px;
  background: #3335cf 0% 0% no-repeat padding-box;
  border: none;
  font-size: 14px;
  color: #ffffff;
  opacity: 1;
  margin-left: 75%;
  &:hover,
  &:active,
  &:focus {
    background: #ff7b00 0% 0% no-repeat padding-box;
  }
`;

export const DownloadButton = styled(Button)`
  height: 35px;
  width: 150px;
  background: #ff7b00 0% 0% no-repeat padding-box;
  border: none;
  font-size: 14px;
  color: #ffffff;
  opacity: 1;
  margin-left:26%;
  margin-top: 8%;
  &:hover,
  &:active,
  &:focus {
    background: #3335cf 0% 0% no-repeat padding-box;
  }
`;

 export const Buttons = styled(Button)`
  height: 35px;
  width: 120px;
  background: #ff7b00 0% 0% no-repeat padding-box;
  border: none;
  font-size: 14px;
  color: #ffffff;
  opacity: 1;
  &:hover,
  &:active,
  &:focus {
    background: #3335CF 0% 0% no-repeat padding-box;
  }
`;

export const FirstWrapper= styled.div`
background-color: #FCFCFF;
width:70%;
margin-left:2%
`;

export const ThirdWrapper= styled.div`
background-color: #F6F6FE;
width:20%;
`;

export const Label = styled.div`
color:#FF7B00;
text-align: center;
font-family:serif;
font-size:38px;
padding-top:2.5%;
background: var(--unnamed-color-ff7b00) 0% 0% no-repeat padding-box;
`;

export const Title = styled.div`
color:#3335CF;
font-family: normal normal bold 40px/60px Montserrat;
font-size:35px;
margin-left:4%;
margin-top:2%;
`;

interface bold {
  fontSize?: string;
  fontWeight?: string;
}
export const Bold = styled.p<bold>`
 font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "700")};
  color:#3335CF;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "25px")};
  font-family:  normal normal bold 36px/60px Montserrat;
  color: #3335CF;
  padding-top: 2%;
  padding-right: 2%;
  @media(max-width:600px){
    margin: 0 auto;
    font-size: 18px;
    width:100%;
  
  }
`;

export const FlexWrap = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
background-color: #FFF2E1;
height: 110px;
#logoWrapper {
  display: row;
  flex-direction:row;
}
@media (max-width: 600px) {
   display: flex;

  }
`;