import styled from "styled-components";


interface AlignWrapperProps {
  justifyContent?: string;
}

const AlignWrapper = styled.div<AlignWrapperProps>`
  display: flex;
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
`;
export default AlignWrapper;
