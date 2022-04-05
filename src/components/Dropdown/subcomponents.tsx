import styled from "styled-components";
import { H3 } from "../../typography";
import { DropdownWrapperProps } from "./typings";

export const DropdownWrapper = styled.div<DropdownWrapperProps>`
  width: ${({ width }) => width || "100%"};
  @media (max-width: 415px) {
    width: 100%;
  }

  ${({ isDisabled }) =>
    isDisabled &&
    `
        pointer-events: none;
        opacity: 0.7;
    `}
`;

export const Title = styled(H3)`
  margin-bottom: 5px;
`

export const ErrorWrapper = styled.p`
  color: #e90a32;
  margin: 3px 0;
  max-width: 5rem;
`
