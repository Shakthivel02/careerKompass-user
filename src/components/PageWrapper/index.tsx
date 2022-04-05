import styled from "styled-components";

const PageWrapper = styled.div`
  margin: 24px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 12px;
  @media (max-width: 415px) {
    width: 98%;
  }
  overflow-x: hidden;
`;

export default PageWrapper;
