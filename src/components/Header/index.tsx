import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";
import {
  HeaderWrapper,
  HamburgerMenu,
  MenuContainer,
  LoginButton,
  LogoWrapper,
  Logo,
  Wrapper,
} from "./subcomponents";
import logo from "../../assests/logo.png";

const Header = (): ReactElement => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo src={logo} alt="logo" />
      </LogoWrapper>
      <Wrapper>
        <LoginButton
          classNameName="login"
          onClick={() => { }}
        >
          Login
        </LoginButton>
        <MenuContainer>Menu</MenuContainer>
        <HamburgerMenu>
          <FontAwesomeIcon icon={["fas", "bars"]} size="lg" />
        </HamburgerMenu>
      </Wrapper>
    </HeaderWrapper>
  );
};

export default Header;
