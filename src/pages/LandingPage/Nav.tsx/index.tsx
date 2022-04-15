import React, { useState } from "react"; 
import {  HeaderWrapper, LogoWrapper, MenuContainer, Wrapper } from "../subcomponents";
import { Hamburger, Menu, MenuLink, Nav } from "./styled";
 
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <HeaderWrapper>
                <LogoWrapper>
                </LogoWrapper>
                <Wrapper>
                <MenuContainer>Menu</MenuContainer> 
                </Wrapper>
            </HeaderWrapper>
            <Nav> 
                <Menu isOpen={isOpen}>
                    <MenuLink href="">Home</MenuLink>
                    <MenuLink href="">About</MenuLink> 
                    <MenuLink href="">Contact us</MenuLink>
                </Menu>
                
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <span />
                    <span />
                    <span />
                </Hamburger>
            </Nav>
            
        </>
    );
};

export default Navbar;

 