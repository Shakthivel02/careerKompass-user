import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";
import {
  HamburgerMenu,
  HeaderWrapper,
  Logo,
  LogoWrapper,
  MenuContainer,
  Wrapper,
} from "./subcomponent";
import logo from "../../assests/logo.png";

const UserHeader = (): ReactElement => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo src={logo} />
      </LogoWrapper>
      <Wrapper>
        <MenuContainer>Menu</MenuContainer>
        <HamburgerMenu>
          <FontAwesomeIcon icon={["fas", "bars"]} size="lg" />
        </HamburgerMenu>
      </Wrapper>
    </HeaderWrapper>
  );
};

export default UserHeader;
