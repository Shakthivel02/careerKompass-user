import styled from "styled-components";
import { InputGroup, FormControl } from "react-bootstrap";
import { colors } from "../../const/theme";
import { EditDropdownWrapperProps } from "./typings";
import { H3 } from "../../typography";

export const ListInput = styled(InputGroup)`
  height: 43%;
  #input {
    font-size: 13px;
  }
  #dropdown-id {
    border: none;
    background-color: white;
    &:hover,
    &:focus {
      background: white;
      color: #9b8f8f;
    }
  }
  .dropdown-menu.show {
    max-height: 300px;
    font-family: 'Montserrat', sans-serif; 
    overflow: auto;
    font-weight: 600;
    transform: translate(0, 40px) !important;
  }
`;

export const Title = styled(H3)`
  margin-bottom: 5px;
`;

export const DropdownInput = styled(FormControl)`
  border: none;
  ::placeholder {
    color: #7d7da3;
    text-transform: capitalize;
    font-weight: 500;
    opacity: 0.57;
    font-size: 11px;
    font-family: 'Montserrat', sans-serif;  
  }
  .input[type="text"] {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: 'Montserrat', sans-serif; 
    resize: vertical;
    color: red;
  }
  background: ${colors.white} !important;

  &.is-valid + #dropdown-id {
    border-color: green;
  }

  &.is-invalid + #dropdown-id {
    border-color: red;
  }
`;

export const EditDropdownWrapper = styled.div<EditDropdownWrapperProps>`
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
