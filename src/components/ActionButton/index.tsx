import styled from "styled-components";
import { Button } from "react-bootstrap";

const ActionButton = styled(Button)`
  margin: ${({ margin }) => (margin ? `${margin}%` : "auto")};
  margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}px` : "10px")};
  margin-left: ${({ marginLeft }) => (marginLeft ? `${marginLeft}px` : "auto")};
  margin-right: ${({ marginRight }) =>
    marginRight ? `${marginRight}px` : "auto"};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? `${backgroundColor}` : "#f47f34"};
  border: none;
  &:hover,
  &:focus {
    background-color: #f47f34;
  }
  &:active {
    background-color: #f47f34;
  }
  #logoWrapper {
    font-family: "Montserrat", sans-serif;
  }
  @media (max-width: 850px) {
    font-size: 13px;
  }
`;

export default ActionButton;
