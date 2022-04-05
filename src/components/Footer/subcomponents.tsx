import { Figure } from "react-bootstrap";
import styled from "styled-components";

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  background: rgb(235, 235, 248);
  margin-top: -3.4%;
  position: relative;
  z-index: 100;
  @media (max-width: 750px) {
    margin-top: -6%;
    height: 120px;
  }
`;

export const FooterImage = styled(Figure.Image)`
  width: 56%;
  height: 88%;
  @media (max-width: 650px) {
    width: 500px;
    height: 50px;
  }
`;

export const FooterImageWrapper = styled(Figure)`
  margin-top: 8%;
  margin-left: 8%;
  @media (max-width: 650px) {
    padding-top: 4%;
  }
`;

export const ListGroup = styled.ul`
  margin-top: 8%;
  margin-left: 4%;
  list-style-type: none;
  @media (max-width: 650px) {
    width: 100%;
    padding-top: 4%;
  }
`;
export const ListItemsHead = styled.li`
  font-weight: 700;
  @media (max-width: 650px) {
    font-size: 50%;
  }
`;

export const ListItems = styled.li`
  @media (max-width: 650px) {
    font-size: 60%;
  }
`;

export const FooterTermsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: rgb(235, 235, 248);
`;

export const FooterTerms = styled.h4`
  color: rgb(116, 116, 154);
  padding-bottom: 1.5%;
  font-size: 12px;
  margin: 3%;
  @media (max-width: 650px) {
    font-size: 50%;
  }
`;
