import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";
import {
  DesktopWrapper,
  HamburgerMenu,
  LogoBrand,
  LogoWrapper,
  SubBrand,
} from "./subcomponents";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { updateIsMenuOpen } from "../../redux/menu/actions";

const DesktopMenu = (): ReactElement => {
  const { isMenuOpen } = useSelector((state: RootState) => state.menu);
  const dispatch = useDispatch();

  return (
    <DesktopWrapper>
      <LogoWrapper>
        <LogoBrand>Career</LogoBrand>
        <SubBrand>Kompus</SubBrand>
        <sup>®</sup>
        <HamburgerMenu
          variant="light"
          onClick={() => dispatch(updateIsMenuOpen(!isMenuOpen))}
        >
          <FontAwesomeIcon icon={["fas", "bars"]} size="lg" />
        </HamburgerMenu>
      </LogoWrapper>
    </DesktopWrapper>
  );
};

export default DesktopMenu;
