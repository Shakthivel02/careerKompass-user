import styled from "styled-components";

interface MeneProps {
    isOpen: any
}

export const MenuLink = styled.a`
   padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #67bc98;
  -moz-transition:all 200ms ease-in;
    -webkit-transition:all 200ms ease-in;
    -o-transition:all 200ms ease-in;
    transition:all 200ms ease-in;
  font-size: 0.9rem;

  &:hover {
    color: #7b7fda;
  }
`;

export const Nav = styled.div`
   padding: 0 2rem;
   display: flex; 
   justify-content: flex-end;
   align-items: center; 
   background: white;
`;

export const Menu = styled.div<MeneProps>`
  display: block;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.2s ease-in-out;
    width: 50%;
  
`;

export const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }

`;
