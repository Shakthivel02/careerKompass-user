import styled from "styled-components";
import { colors } from "../../const/theme"
import { Button } from "react-bootstrap"
import { Body } from "../../typography"
import { NavigationButtonProps } from "./typing"

export const TableFooterWrapper = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  flex-direction: row;
  border: none;
  justify-content: center;
`

export const NavigationButton = styled(Button)<NavigationButtonProps>`
  border-color: ${colors.white};
  color: ${colors.gray};
  text-transform: capitalize;
  &:hover,
  &:focus {
    border-color: ${colors.white};
    background: ${colors.white};
    color: ${colors.black};
  }
  min-width: 100px;
  max-width: 150px;
  div {
    display: flex;
    justify-content: ${({ $isLeft }) => ($isLeft ? 'end' : 'start')};
  }
  svg {
    margin: auto 10px;
  }
`

export const PageDisplay = styled(Body)`
  width: 20%;
  text-align: center;
  @media (max-width: 415px) {
    width: 40%;
  }
`
