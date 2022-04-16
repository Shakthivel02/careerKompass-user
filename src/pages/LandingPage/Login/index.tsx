import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { Loader } from '../../../components'
import { handleAuthenticate, updatePassword, updateUserName } from '../../../redux/login/action'
import {
    ModalDialog,
    LoginHeaderWrapper, 
    LoginDialog, 
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
} from "./subcomponents"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { RootState } from '../../../redux/store'

const Login = () => {

    const {
        isLoading,
    } = useSelector(
        (state: RootState) => ({
            isLoading: state.login.isLoading,
            isLoggedIn: state.login.isLoggedIn,
            streamList: state.stream.streamMaster,
            profileData: state.register.profileData,
            registerDetails: state.register.registerDetails,
        }),
        shallowEqual
    )
     
    
    const dispatch = useDispatch()
    const [showLogin, setShowLogin] = useState(false)
    const Toggle = () => setShowLogin(!!!showLogin);

    return (
        <ModalDialog
            show={true}
            onHide={Toggle}
            centered={true}
            contentclassNameName="contentName"
            backdrop="true"
            keyboard={false}
        >
            <LoginDialog>
                <LoginHeaderWrapper>
                </LoginHeaderWrapper>
                <ModalWrapper>
                    <LoginWrapper>
                        <Title>
                            Login
                        </Title>
                        <HelperText
                            onClick={() => { 
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

export default Login