import Card from "react-bootstrap/Card";
import styled from "styled-components";


const CardWrapper = styled(Card)`
  width: ${({ width }) => (width ? width : "60%")};
  padding: 0 32px 16px;
  @media (max-width: 415px) {
    width: 100%;
    margin-bottom: 16px;
  }
`;

export default CardWrapper;