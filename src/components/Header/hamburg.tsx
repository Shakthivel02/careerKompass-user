import styled from "styled-components";

export const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-top: 8%;
  transition: 5s;
  span {
    height: 2px;
    width: 25px;
    background: #3e40c0;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  .line:nth-child(1) {
    transform: translateY(1px) rotate(45deg);
  }
  .line:nth-child(2) {
    display: none;
  }
  .line:nth-child(3) {
    transform: translateY(-10px) rotate(-45deg);
  }
`;
