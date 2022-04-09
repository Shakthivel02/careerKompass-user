/* eslint-disable jsx-a11y/alt-text */
import { ChangeEvent, ReactElement, SyntheticEvent, useEffect, useState } from "react"
import {
    Container1,
    Container2,
    LoginButton,
    Logo,
    LogoWrapper,
    MenuContainer,
    PageWrapper,
    HeaderWrapper,
    Wrapper,
    HamburgerMenu,
    Header,
    Body,
    Footer,
    Details,
    Start,
    Details2,
    Header2,
    Body2,
    Cards,
    CardWrapper,
    CardHeader,
    CardBody,
    CardFooter,
    Container3,
    Header3,
    Body3,
    ContainImg,
    ContainBImg,
} from "./subcomponents"
import logo from '../../assests/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import c1 from '../../assests/c1.png'
import c2 from '../../assests/c2.png'
import c3 from '../../assests/c3.png'
import co3 from '../../assests/co3.png'
import Footers from '../LandingPage/footer/index'
import Backimage11 from "../../assests/contain1.png";
import Backimage12 from "../../assests/contain2.png";

import {
    ModalDialog,
    LoginHeaderWrapper,
    LoginLogo,
    LoginDialog,
    LockLogo,
    Title,
    BodyWrapper,
    Input,
    FormInput,
    InputBox,
    CheckboxWrapper,
    SubTitle,
    Forgot,
    ModalLoginButton,
    ModalWrapper
} from "./Login/subcomponents"
import lock from '../../assests/login.png'
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import ROUTES from "../../const/routes"
import { useHistory } from "react-router-dom"
import { RootState } from "../../redux/store"
import { handleAuthenticate, updatePassword, updateUserName } from "../../redux/login/action"

const User = (): ReactElement => {

    const {
        isLoading,
        isLoggedIn,
        hasError = false,
    } = useSelector((state: RootState) => state.login, shallowEqual);

    const [showModal, setShowModal] = useState(false)

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (isLoggedIn) {
            history.push(ROUTES.SELECTEDSTREAM);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn]);

    return (
        <PageWrapper>
            <Container1>
                <HeaderWrapper>
                    <LogoWrapper>
                        <Logo src={logo} alt="logo" />
                    </LogoWrapper>
                    <Wrapper>
                        <LoginButton
                            className="login"
                            onClick={() => setShowModal(true)}
                        >Login</LoginButton>
                        <MenuContainer>Menu</MenuContainer>
                        <HamburgerMenu
                            onClick={() => { }}
                        >
                            <FontAwesomeIcon icon={['fas', 'bars']} size="lg" />
                        </HamburgerMenu>
                    </Wrapper>
                </HeaderWrapper>
                <Details>
                    <Header> Welcome to Careerkompass</Header>
                    <Body>your ideal career pointer !!</Body>
                    <Footer>
                        With advanced intelligence metrics and precise tools for  personality-skill-job-synchronization, embark on a  redefined career test to negative in the direction of your dreams.
                    </Footer>
                    <Start>Start Test</Start>
                </Details>
                <ContainBImg src={Backimage12}
                />
                <ContainImg src={Backimage11}
                />
            </Container1>


            <Container2>
                <Details2>
                    <Header2>Discover your best Career path</Header2>
                    <Body2>with careerkompass's top-notch proffession guidance</Body2>
                </Details2>
                <CardWrapper>
                    <Cards>
                        <CardHeader>Explore</CardHeader>
                        <CardBody><img src={c1} width="50" height="60" /></CardBody>
                        <CardFooter>Careerskompass computes your personality traits, strong interest and align them with work skills to determine the besr career options in varied work enviroment</CardFooter>
                    </Cards>
                    <Cards>
                        <CardHeader>Idetify</CardHeader>
                        <CardBody><img src={c2} width="50" height="50" /></CardBody>
                        <CardFooter>The testing elements  capture your apporach to various scenarious identifying your strength attitude,aptitude,and more.Also established on the lines of real jobs
                        </CardFooter>
                    </Cards>
                    <Cards>
                        <CardHeader>Advance</CardHeader>
                        <CardBody><img src={c3} width="50" height="56" /></CardBody>
                        <CardFooter>Receive an inventory of career interests and a personalized guide to stter your career forward on a new journey!</CardFooter>
                    </Cards>
                </CardWrapper>
            </Container2>


            <Container3>
                <Header3>How it Works?</Header3>
                <Body3 src={co3} />
            </Container3>

            <Footers />
            {showModal && (
                <ModalDialog
                    show={true}
                    onHide={() => setShowModal(false)}
                    centered={true}
                    contentClassName="content"
                    backdrop="true"
                    keyboard={false}
                >
                    <LoginDialog>
                        <LoginHeaderWrapper>
                            <LoginLogo src={logo} />
                            <LockLogo src={lock} />
                        </LoginHeaderWrapper>
                        <ModalWrapper>
                            <Title>
                                Login
                            </Title>
                            <BodyWrapper
                                onSubmit={(e: SyntheticEvent) => {
                                    e.preventDefault();
                                    dispatch(handleAuthenticate());
                                }}
                            >
                                <Input>
                                    <FormInput
                                        placeholder='User Id'
                                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                            dispatch(updateUserName(event?.target?.value))
                                        }
                                        type="text"
                                    />
                                </Input>
                                <Input>
                                    <FormInput
                                        placeholder='Password'
                                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                            dispatch(updatePassword(event?.target?.value))
                                          }
                                          type="password"
                                    />
                                </Input>
                                <CheckboxWrapper>
                                    <InputBox />
                                    <SubTitle>Remember me..</SubTitle>
                                </CheckboxWrapper>
                                <Forgot>
                                    forgetPassword
                                </Forgot>
                                <ModalLoginButton
                                          type="submit"
                                
                                >
                                    Login
                                </ModalLoginButton>
                            </BodyWrapper>
                        </ModalWrapper>
                    </LoginDialog>
                </ModalDialog>
            )
            }
        </PageWrapper>
    )
}

export default User