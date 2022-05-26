import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement, useState } from "react";
import {
  HeaderWrapper,
  HamburgerMenu,
  MenuContainer,
  LoginButton,
  LogoWrapper,
  Logo,
  Wrapper,
  MenuList,
  MenuListWrapper,
} from "./subcomponents";
import logo from "../../assests/logo.png";
import { useHistory } from "react-router-dom";
import ROUTES from "../../const/routes";
import { Hamburger } from "./hamburg";

interface ManiHeaderProps {
  showLogin?: any;
}

const MainHeader = ({ showLogin }: ManiHeaderProps): ReactElement => {
  const [toggleMenu, setToggleMenu] = useState({ style: { display: "none" } });
  const [menuDisplay, setMenuDisplay] = useState({ view: "inline" });

  const history = useHistory();

  const Toggle = () => {
    if (toggleMenu.style.display === "none") {
      setToggleMenu({ style: { display: "inline" } });
      setMenuDisplay({ view: "none" });
    } else {
      setToggleMenu({ style: { display: "none" } });
      setMenuDisplay({ view: "inline" });
    }
  };

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo src={logo} alt="logo" />
      </LogoWrapper>
      <Wrapper>
        <LoginButton classNameName="login" onClick={() => showLogin(true)}>
          Login
        </LoginButton>
        <MenuListWrapper
          style={{
            display: `${toggleMenu.style.display}`,
          }}
        >
          <MenuList
            onClick={() => {
              history.push(ROUTES.LOGIN);
            }}
          >
            Home
          </MenuList>
          <MenuList
            onClick={() => {
              history.push(ROUTES.ABOUT);
            }}
          >
            About
          </MenuList>
          <MenuList>Contact Us</MenuList>
        </MenuListWrapper>
        <MenuContainer style={{ display: `${menuDisplay.view}` }}>
          Menu
        </MenuContainer>
        {(toggleMenu.style.display === "inline" && (
          <Hamburger onClick={Toggle}>
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </Hamburger>
        )) || (
            <HamburgerMenu onClick={Toggle}>
              <FontAwesomeIcon icon={["fas", "bars"]} size="lg" />
            </HamburgerMenu>
          )}
      </Wrapper>
    </HeaderWrapper>
  );
};

export default MainHeader;
