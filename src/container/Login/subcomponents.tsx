import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import { H1, H3 } from "../../typography";
import fonts from "../../const/fonts";
import theme from "../../const/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LoginWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  border-radius: 4px;
  background: ${theme.appBackground};
`;
export const Title = styled(H1)`
  text-align: center;
  margin-top: 24px;
  color: #0000ff;
`;
export const Container = styled.div`
  width: 100%;
  max-width: 80%;
  height: 300px;
  margin: auto;
  @media (min-width: 749px) {
    width: 40%;
  }
`;
export const SubTitle = styled(H3)`
  text-align: center;
`;
export const FormWrapper = styled.div`
  background: white;
  padding: 1rem 0.5rem;
`;
export const SubmitButton = styled(Button)`
  display: block;
  margin: auto;
  border: none;
  background-color: #f47f34;
  margin-top: 3%;
  &:hover {
    background-color: #f47f34;
  }
`;
export const FormContainer = styled(Form)`
  display: flex;
  max-width: 75%;
  margin: 20px auto;
  flex-direction: column;
  justify-content: center;
`;
export const Icon = styled(FontAwesomeIcon)`
  font-size: ${fonts.medium}px;
  color: ${({ theme }) => theme?.icon?.normal};
  margin: auto 8px;
`;
export const Label = styled.div`
  margin-left: 35%;
  color: black;
  margin-top: 3%;
`;
