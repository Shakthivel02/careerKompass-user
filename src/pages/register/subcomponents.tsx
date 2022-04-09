import { Form } from "react-bootstrap"
import styled from "styled-components"
import { weight } from "../../const/fonts"
import { H3 } from "../../typography"

export const RegisterWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  height: 110vh;
  border-radius: 4px;
  background: ${({ theme }) => theme?.appBackground};
`

export const ContainerWrapper = styled.div`
  width: 100%;
  max-width: 80%;
  margin: auto;
  background: ${({ theme }) => theme?.login?.background};
  border-bottom-left-radius:20px;
  border-top-right-radius:20px;
  border:1px solid gray;
  @media (min-width: 769px) {
    width: 60%;
  }
  `
export const Title = styled(H3)`
text-align: center;
font-weight: ${weight.bold};
position: relative;
top: 3rem;
`
export const FormContainer = styled(Form)`
  max-width: 85%;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
 
export const RLogoWrapper = styled.div`
width: 120px;
height: 35%;
display: flex; 
margin: auto ;
`;
export const RLogo = styled.img`
margin: 0 auto;
width: 90px;
height: 35%;
display: flex; 
margin: auto 12px;
`;