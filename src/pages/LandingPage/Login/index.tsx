import { ReactElement, useState } from 'react'
import {
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
    ModalDialog, 
    ModalWrapper
} from './subcomponents'
import logo from '../../assests/logo.png'
import lock from '../../assests/login.png'



const Login = (): ReactElement => {
    const [showModal, setShowModal] = useState(false)
    return (
        //   <LoginDialog>
        //       <HeaderWrapper>
        //           <LoginLogo src={logo} />
        //           <LockLogo src={lock} />
        //       </HeaderWrapper>
        //       <Title>
        //           Login
        //       </Title>
        //       <BodyWrapper>
        //           <Input>
        //               <Form
        //                   placeholder='UserName'
        //               />
        //           </Input>
        //           <Input>
        //               <Form
        //                   placeholder='UserName'
        //               />
        //           </Input>
        //           <CheckboxWrapper>
        //               <InputBox />
        //               <SubTitle>Remember me..</SubTitle>
        //           </CheckboxWrapper>
        //           <Forgot>
        //               forgetPassword
        //           </Forgot>
        //           <LoginButton>
        //               Login
        //           </LoginButton>
        //       </BodyWrapper>
        //   </LoginDialog>
        <ModalDialog
            show={true}
            onHide={()=>setShowModal(false)}
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
                    <BodyWrapper>
                        <Input>
                            <FormInput
                                placeholder='User Id'
                            />
                        </Input>
                        <Input>
                            <FormInput
                                placeholder='Password'
                            />
                        </Input>
                        <CheckboxWrapper>
                            <InputBox />
                            <SubTitle>Remember me..</SubTitle>
                        </CheckboxWrapper>
                        <Forgot>
                            forgetPassword
                        </Forgot>
                        <ModalLoginButton>
                         Login 
                         </ModalLoginButton>
                    </BodyWrapper>
                </ModalWrapper>
            </LoginDialog>
        </ModalDialog>
    )
}

export default Login