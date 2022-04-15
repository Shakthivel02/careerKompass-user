/* eslint-disable no-empty-pattern */
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
    ModalWrapper,
    LoginWrapper,
    HelperText
} from "./Login/subcomponents"
import lock from '../../assests/login.png'
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import ROUTES from "../../const/routes"
import { useHistory } from "react-router-dom"
import { RootState } from "../../redux/store"
import { handleAuthenticate, updatePassword, updateUserName } from "../../redux/login/action"
import {
    RegisterWrapper,
    RegisterHeaderWrapper,
    RegisterLock,
    RegisterLogo,
    RegisterModalDialog,
    RegisterModalWrapper,
    RegisterTitleWrapper,
    RegisterBodyWrapper,
    RegisterInput,
    RegisterFormInput,
    ModalRegisterButton,
    Span,
    RegisterTitle,
    RegisterHelperText
} from "./RegisterStyle/subcomponents"
import { EditableDropdown, FlexWrapper, Loader } from "../../components"
import { getProfileDropdown, getStreamDropdown, getCountryDropdown, getStateDropdown } from "../../helpers/dropdown"
import { handleStreamMaster, updateSelectedStream } from "../../redux/streamMaster/action"
import { getProfile, AddUserApi, getCountries } from "../../redux/Register/action"
import { DropdownListProps } from "../../components/EditableDropdown/typings"
import { OTPBodyWrapper, OTPFormInput, OTPHeaderWrapper, OTPHelperText, OTPInput, OTPLock, OTPLogo, OTPModalDialog, OTPSubmitButton, OTPTitle, OTPTitleWrapper, OTPVerifyWrapper, OTPWrapper, ResendButton } from "./OTPStyle/subcomponent"
import { getStates } from "../../redux/Register/api"

const User = (): ReactElement => {

    const {
        isLoading,
        isLoggedIn,
        streamList,
        profileData,
        registerDetails,
        countryList,
        stateList,
    } = useSelector(
        (state: RootState) => ({ 
            isLoading: state.login.isLoading,
            isLoggedIn: state.login.isLoggedIn,
            streamList: state.stream.streamMaster,
            profileData: state.register.profileData,
            registerDetails: state.register.registerDetails,
            countryList: state.register.countryData,
            stateList: state.register.stateData
        }),
        shallowEqual
    )

    const StreamDropdown = streamList ? getStreamDropdown(streamList) : [];
    const ProfileDropdown = profileData ? getProfileDropdown(profileData) : [];
    const CountyDropdown = countryList ? getCountryDropdown(countryList) : [];
    const StateDropDown = stateList ? getStateDropdown(stateList) : [];
    

    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    const [showOtp, setShowOtp] = useState(false)
    const [values, setValues] = useState(registerDetails)

    const dispatch = useDispatch();
    const history = useHistory();

    const handleRegisterSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        dispatch(AddUserApi(values))
        setShowOtp(true)
        setShowRegister(false)
    }

    useEffect(() => {
        
        dispatch(getCountries())
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
                            classNameName="login"
                            onClick={() => setShowLogin(true)}
                        >Login</LoginButton>
                        <MenuContainer>Menu</MenuContainer>
                        <HamburgerMenu >
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
                    <Start
                        onClick={() => setShowLogin(true)}
                    >Start Test</Start>
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
            {showLogin && (
                <ModalDialog
                    show={true}
                    onHide={() => setShowLogin(false)}
                    centered={true}
                    contentclassNameName="contentName"
                    backdrop="true"
                    keyboard={false}
                >
                    <LoginDialog>
                        <LoginHeaderWrapper>
                            <LoginLogo src={logo} />
                            <LockLogo src={lock} />
                        </LoginHeaderWrapper>
                        <ModalWrapper>
                            <LoginWrapper>
                                <Title>
                                    Login
                                </Title>
                                <HelperText
                                    onClick={() => {
                                        setShowRegister(true)
                                        setShowLogin(false)
                                    }}
                                >New user ?<span>Register</span></HelperText>
                            </LoginWrapper>
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
                                    // type="password"
                                    />
                                </Input>
                                <CheckboxWrapper>
                                    <InputBox />
                                    <SubTitle>Remember me..</SubTitle>
                                </CheckboxWrapper>
                                <Forgot>
                                    forgetPassword
                                </Forgot>
                                {isLoading ? (
                                    <Loader />
                                ) : (
                                    <ModalLoginButton
                                        type="submit"
                                    >
                                        Login
                                    </ModalLoginButton>
                                )}

                            </BodyWrapper>
                        </ModalWrapper>
                    </LoginDialog>
                </ModalDialog>
            )
            }
            {showRegister && (
                <RegisterModalDialog
                    show={true}
                    onHide={() => setShowRegister(false)}
                    centered={true}
                    dialogClassName='dialog'
                    backdrop="true"
                    size="lg"
                    keyboard={false}
                >
                    <RegisterWrapper>
                        <RegisterHeaderWrapper>
                            <RegisterLogo src={logo} />
                            <RegisterLock src={lock} />
                        </RegisterHeaderWrapper>
                        <RegisterModalWrapper>
                            <RegisterTitleWrapper>
                                <RegisterTitle>Register</RegisterTitle>
                                <RegisterHelperText
                                    onClick={() => {
                                        setShowLogin(true)
                                        setShowRegister(false)
                                    }}
                                >Have an account ? <span>Login</span></RegisterHelperText>
                            </RegisterTitleWrapper>
                            <RegisterBodyWrapper onSubmit={handleRegisterSubmit}>
                                <FlexWrapper justifyContent="space-around">
                                    <RegisterInput>
                                        <RegisterFormInput
                                            placeholder='First Name'
                                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                setValues({ ...values, name: e.target.value })
                                            }
                                            type="text"
                                        />
                                    </RegisterInput>
                                    <RegisterInput>
                                        <RegisterFormInput
                                            placeholder='Last Name'
                                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                setValues({ ...values, lastName: e.target.value })
                                            }
                                            type="text"
                                        />
                                    </RegisterInput>
                                    <RegisterInput>
                                        <RegisterFormInput
                                            placeholder='E-mail'
                                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                setValues({ ...values, email: e.target.value })
                                            }
                                            type="text"
                                        />
                                    </RegisterInput>
                                    <RegisterInput>
                                        <RegisterFormInput
                                            placeholder='Password'
                                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                setValues({ ...values, password: e.target.value })
                                            }
                                            type="text"
                                        />
                                    </RegisterInput>
                                    <RegisterInput>
                                        <Span>+91</Span>
                                        <RegisterFormInput
                                            placeholder='Mobile No'
                                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                setValues({ ...values, mobile: e.target.value })
                                            }
                                            type="text"
                                        />
                                    </RegisterInput>
                                    <RegisterInput>
                                        <RegisterFormInput
                                            placeholder='City'
                                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                setValues({ ...values, city: e.target.value })
                                            }
                                            type="text"
                                        />
                                    </RegisterInput>
                                    <RegisterInput>
                                        <EditableDropdown
                                            dropdownList={CountyDropdown}
                                            placeholder={"Select Countries"}
                                            handleSelect={(value: DropdownListProps) => {
                                                setValues({ ...values, country: value?.name })
                                                dispatch(getStates({
                                                    id: value?.id
                                                }))
                                            }}
                                        />
                                    </RegisterInput>
                                    <RegisterInput>
                                        <EditableDropdown
                                            dropdownList={StateDropDown}
                                            placeholder={"Select State"}
                                            handleSelect={(value: DropdownListProps) => {
                                                setValues({ ...values, state: value?.name })
                                                dispatch(getProfile())
                                            }}
                                        />
                                    </RegisterInput>
                                    <RegisterInput>
                                        <EditableDropdown
                                            dropdownList={ProfileDropdown}
                                            placeholder={"Select Profile"}
                                            handleSelect={(value: DropdownListProps) => {
                                                setValues({ ...values, profile: value?.name })
                                                dispatch(handleStreamMaster())

                                            }}
                                        />
                                    </RegisterInput>
                                    <RegisterInput>
                                        <EditableDropdown
                                            dropdownList={StreamDropdown}
                                            placeholder={"Select Stream"}
                                            handleSelect={(value: DropdownListProps) => {
                                                setValues({ ...values, stream: value?.id }) 
                                                dispatch(updateSelectedStream({
                                                    streamID: value?.id
                                                }))
                                            }}
                                        />
                                    </RegisterInput>
                                    <ModalRegisterButton type="submit">
                                        Next
                                    </ModalRegisterButton>
                                </FlexWrapper>
                            </RegisterBodyWrapper>
                        </RegisterModalWrapper>
                    </RegisterWrapper>
                </RegisterModalDialog>
            )}
            {showOtp && (
                <OTPModalDialog
                    show={true}
                    onHide={() => setShowOtp(false)}
                    centered={true}
                    dialogClassName='OTPdialog'
                    backdrop="true"
                    size="sm"
                    keyboard={false}
                >
                    <OTPWrapper>
                        <OTPHeaderWrapper>
                            <OTPLogo src={logo} />
                            <OTPLock src={lock} />
                        </OTPHeaderWrapper>
                        <OTPTitleWrapper>
                            <OTPVerifyWrapper>
                                <OTPTitle>Verify</OTPTitle>
                                <OTPHelperText>Resend OTP in <span>12</span></OTPHelperText>
                            </OTPVerifyWrapper>
                            <OTPBodyWrapper>
                                <OTPInput>
                                    <OTPFormInput
                                        placeholder="Enter OTP"
                                    />
                                </OTPInput>
                                <ResendButton>Resend OTP</ResendButton>
                                <OTPSubmitButton type="submit">
                                    Register
                                </OTPSubmitButton>
                            </OTPBodyWrapper>
                        </OTPTitleWrapper>
                    </OTPWrapper>
                </OTPModalDialog>
            )}
        </PageWrapper>
    )
}

export default User