import styled from "styled-components";

export interface DropdownWrapperProps {
  width?: string;
  height?: string;
}

const DropdownWrapper = styled.div<DropdownWrapperProps>`
  margin: 0 15px 10px;
  width: ${({ width }) => (width ? `${width}%` : "22%")};
  margin-left: 2%;
  @media (max-width: 415px) {
    width: 100%;
    margin: 8px;
  }
  #editable-dropdown {
    height: 100%;
  }
`;

export default DropdownWrapper;
