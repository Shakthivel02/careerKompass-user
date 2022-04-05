import styled from "styled-components";
import { CloseButton } from "react-bootstrap";
import { CloseButtonProps } from "./typings";

export const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  margin-right: -4%;
  margin-top: 1%;
`;

export const Close = ({ onClick }: CloseButtonProps) => {
  return (
    <CloseButtonWrapper>
      <CloseButton onClick={() => onClick && onClick()} />
    </CloseButtonWrapper>
  );
};
