
import { ReactElement } from "react";
import {
  DesktopWrapper, 
  LogoBrand,
  LogoWrapper,
  SubBrand,
} from "./subcomponents"; 

const DesktopMenu = (): ReactElement => { 
  return (
    <DesktopWrapper>
      <LogoWrapper>
        <LogoBrand>Career</LogoBrand>
        <SubBrand>Kompus</SubBrand>
        <sup>®</sup> 
      </LogoWrapper>
    </DesktopWrapper>
  );
};

export default DesktopMenu;
