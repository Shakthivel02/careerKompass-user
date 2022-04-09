import { ChangeEvent, ReactElement, SyntheticEvent, useEffect } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { handleAuthenticate } from "../../redux/login/api";
import {
  SubmitButton,
  Container,
  FormContainer,
  FormWrapper,
  LoginWrapper,
  Title,
  Icon,
  SubTitle,
} from "./subcomponents";
import {
  updateHasError,
  updatePassword,
  updateUserName,
} from "../../redux/login/action";
import { useHistory } from "react-router-dom";
import ROUTES from "../../const/routes";
import { ToastMessage } from "../../components";
import strings from "../../locale/en";

const Login = (): ReactElement => {
  const {
    isLoading,
    isLoggedIn,
    hasError = false,
  } = useSelector((state: RootState) => state.login, shallowEqual);
  const {
    login: { login, message },
    button: { submit },
  } = strings;
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) {
      history.push(ROUTES.SELECTEDSTREAM);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <LoginWrapper>
      <Container>
        <FormWrapper
          onSubmit={(e: SyntheticEvent) => {
            e.preventDefault();
            dispatch(handleAuthenticate());
            history.push(ROUTES.SELECTEDSTREAM);
          }}
        >
          <Title>{login}</Title>
          <SubTitle>Sign in to your account</SubTitle>
          <FormContainer>
            <InputGroup className="mb-3">
              <Icon icon={["fas", "user"]} />
              <FormControl
                type="text"
                placeholder="Enter UserName"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  dispatch(updateUserName(event?.target?.value))
                }
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Icon icon={["fas", "lock"]} />
              <FormControl
                type="password"
                placeholder="Enter Password"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  dispatch(updatePassword(event?.target?.value))
                }
              />
            </InputGroup>
            <SubmitButton variant="primary" type="submit" disabled={isLoading}>
              {submit}
            </SubmitButton>
          </FormContainer>
          <ToastMessage
            show={hasError}
            onCloseHandler={() => dispatch(updateHasError(false))}
            message={message}
          ></ToastMessage>
        </FormWrapper>
      </Container>
    </LoginWrapper>
  );
};
export default Login;
