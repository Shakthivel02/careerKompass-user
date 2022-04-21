import Card from "react-bootstrap/Card";
import styled from "styled-components";

const CardWrapper = styled(Card)`
  box-shadow: 0 1px 10px 0 ${({ theme }) => theme.card.border};
  width: ${({ width }) => (width ? width : "60%")};
  padding: 0 32px 16px;
  @media (max-width: 415px) {
    width: 100%;
    margin-bottom: 16px;
  }
`;

export default CardWrapper;
