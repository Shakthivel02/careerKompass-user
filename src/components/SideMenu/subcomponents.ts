import styled from "styled-components";
import { Link } from "react-router-dom";
import { weight } from "../../const/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListProps } from "./typings";
import { colors } from "../../const/theme";

interface MenuContainerProps {
  isChild?: boolean;
}

export const MenuContainer = styled.ul<MenuContainerProps>`
  margin: ${({ isChild }) => (isChild ? "0 0 0 16px" : "0")};
  width: ${({ isChild }) => (isChild ? "96%" : "100%")};
  z-index: 1;
  left: 0;
  background-color: white;
  overflow-x: hidden;
  padding: 0;
  list-style: none;
  border-right: 1px solid lightgray;
`;
export const Body = styled.p<ListProps>`
  padding: 6px;
  font-size: 15px;
  color: #242e6f;
  margin: auto 0;
  font-weight: ${weight.bold};
  &:hover,
  &:focus {
    color: ${({ $isSelected, theme }) =>
      $isSelected ? theme?.sideMenu.menu.fontColor : colors.heavyOrange};
  }
  &:active {
    color: ${({ $isSelected, theme }) =>
      $isSelected ? theme?.sideMenu.menu.fontColor : colors.heavyOrange};
  }
`;
export const Anchor = styled(Link)<ListProps>`
  padding: 16px 5px;
  text-decoration: none;
  font-size: 14px;
  color: #242e6f;
  display: block;
  transition: 0.3s;
  font-weight: ${weight.bold};
  &:hover,
  &:focus {
    color: ${({ $isSelected, theme }) =>
      $isSelected ? theme?.sideMenu.menu.fontColor : colors.heavyOrange};
  }
  &:active {
    color: ${({ $isSelected, theme }) =>
      $isSelected ? theme?.sideMenu.menu.fontColor : colors.heavyOrange};
  }
`;
export const ListItem = styled.li<ListProps>`
  display: flex;
  border-radius: 10px;
  margin: 5px;
  &:hover {
    background: ${({ theme }) => theme?.sideMenu.menu.background};
  }
  background: ${({ $isSelected, theme }) =>
    $isSelected ? theme?.sideMenu.menu.background : colors.white};
  cursor: pointer;
`;

export const MenuWrapper = styled.div`
  display: flex;
  padding: 4px 1px;
  height: 45px;
  width: 100%;
  align-items: center;
`;

export const MenuLogo = styled.img`
  margin: auto 0;
`;

export const FontIcon = styled(FontAwesomeIcon)<ListProps>`
  margin: auto 12px;
  &:hover,
  &:focus {
    color: ${({ $isSelected, theme }) =>
      $isSelected ? theme?.sideMenu.menu.fontColor : colors.heavyOrange};
  }
`;

export const ChevronIcon = styled(FontAwesomeIcon)`
  padding: 0;
  margin: auto;
  margin-right: 10px;
  color: #242e6f;
`;

export const ListItemChild = styled.li<ListProps>`
  display: flex;
  border: none;
  cursor: pointer;
`;
export const AnchorChild = styled(Link)<ListProps>`
  width: 100%;
  padding: 10px 13px;
  text-decoration: none;
  font-size: 11px;
  color: #242e6f;
  display: block;
  transition: 0.3s;
  font-weight: ${weight.bold};
  &:hover,
  &:focus {
    color: ${({ $isSelected, theme }) =>
      $isSelected ? theme?.sideMenu.menu.fontColor : colors.heavyOrange};
  }
  &:active {
    color: ${({ $isSelected, theme }) =>
      $isSelected ? theme?.sideMenu.menu.fontColor : colors.heavyOrange};
  }
`;
