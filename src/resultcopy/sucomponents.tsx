import { Button, Card } from "react-bootstrap";
import styled from "styled-components";

export const Logos = styled.img`
  width: 22%;
  margin-top:1%;
`;

export const Logo = styled.img`
  width: 12%;
`;

export const Images = styled.img`
  width:80%;
  margin-left:14%;
`;


export const CardFooter = styled.div`
  width:80% ;
 margin-top:10%;
`;

export const CardTitle = styled.div`
  width: 100%;
  color: #ff8d24;
  font-size: 32px;
  margin-left: 25%;
  margin-top: -15%;
`;

export const Label = styled.p`
  width: 100%;
  color: #393bd0;
  font-size: 32px;
  margin-left: 40%;
`;

export const CardText = styled.div`
  width: 100%;
  margin-left:6%;
  font-size:23px;
  font-weight:30px;
`;

export const Text = styled.div`
  width: 100%;
  margin-left:10%;
  font-weight:10px;
  margin-top:10%;
`;

export const Title = styled.div`
  width: 100%;
  margin-left:6%;
  font-size:20px;
  font-weight:30px;
  margin-top:8%;
`;

export const SubmitButton = styled(Button)`
  height: 35px;
  width: 100px;
  background: #ff7b00 0% 0% no-repeat padding-box;
  border: none;
  font-size: 14px;
  color: #ffffff;
  opacity: 1;
  margin-left: 30%;
  margin-top: 110%;
  &:hover,
  &:active,
  &:focus {
    background: #ff7b00 0% 0% no-repeat padding-box;
  }
`;
export const PageWrapper = styled.div`
  width: 100%;
`;

interface bold {
  fontSize?: string;
  fontWeight?: string;
}
export const Bold = styled.p<bold>`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "700")};
  color: #0f1043;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "20px")};
  font-family: Tahoma, Helvetica, sans-serif;
  padding-top: 3%;
  padding-right: 2%;
`;

export const FlexWrap = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
background-color: #fff2e1;
height: 100px;
#logoWrapper {
  dispaly: flex;
}
`;