import styled from "styled-components";
import { InputGroup, Dropdown, FormControl, Button } from "react-bootstrap";
import { colors } from "../../const/theme";
import fonts from "../../const/fonts";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  background: white;
  border-bottom: 1px solid lightgray;
`;

export const LogoWrapper = styled.div`
  width: 120px;
  height: 50%;
  display: flex;
  align-items: center;
  margin: auto 12px;
`;

export const LogoBrand = styled.div`
  font-size: 28px;
  font-weight: 1000;
  font-style: italic;
  font-family: "Roboto", sans-serif;
  color: #f47f34;
`;
export const SubBrand = styled.div`
  font-size: 28px;
  font-weight: 1000;
  font-style: italic;
  font-family: "Roboto", sans-serif;
  color: blue;
`;
export const HamburgerMenu = styled(Button)`
  background: none;
  border: none;
  font-size: ${fonts.medium}px;
  color: ${({ theme }) => theme?.hamburgerMenu};
`;
export const ProfileWrapper = styled.div`
  display: flex;
  width: 65%;
  float: right;
  margin-left: auto;
  margin-right: 24px;
  position: relative;
  @media (min-width: 769px) {
    width: 40%;
  }
`;

export const CourseList = styled(InputGroup)`
  margin: auto 0;
  width: 100%;
  #course-id {
    border: 1px solid ${({ theme }) => theme.border};
    &:hover,
    &:focus {
      background: ${({ theme: { dropDown } }) => dropDown.background};
      color: ${({ theme: { dropDown } }) => dropDown.color};
    }
    color: ${colors.white};
  }
  @media (min-width: 769px) {
    width: 50%;
  }
`;

export const ProfileDropDown = styled(Dropdown)`
  margin: auto;
  margin-right: 0;
  #profile-dropdown {
    color: #2d2d2e;
    border: none;
    display: flex;
    background: none;
  }
`;
export const DropdownToggle = styled(Dropdown.Toggle)`
  ::after {
    display: none !important;
  }
`;
export const UserId = styled.div`
  color: #2d2d2e;
  margin: auto 12px;
  font-size: 13px;
  @media (max-width: 415px) {
    display: none;
  }
`;
export const UserName = styled.label`
  color: #2d2d2e;
  margin: auto 12px;
  @media (max-width: 415px) {
    display: none;
  }
`;

export const DesktopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 415px) {
    display: none;
  }
`;
export const MobileWrapper = styled.div`
  display: flex;
  @media (min-width: 415px) {
    display: none;
  }
`;

export const CourseInput = styled(FormControl)`
  background: ${colors.white} !important;
`;
