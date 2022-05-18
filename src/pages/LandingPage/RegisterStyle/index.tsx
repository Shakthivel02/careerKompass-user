import { ChangeEvent, ReactElement, SyntheticEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EditableDropdown, FlexWrapper } from '../../../components'
import { DropdownListProps } from '../../../components/Dropdown/typings'
import { getCountryDropdown, getStateDropdown } from '../../../helpers/dropdown'
import {
    AddUserApi,
    getCountryPin,
    getProfile,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getCountries,
    getStates
} from '../../../redux/Register/api'
import { RootState } from '../../../redux/store'
import {
    RegisterWrapper,
    RegisterHeaderWrapper,
    RegisterLock,
    RegisterLogo,
    RegisterBodyWrapper,
    RegisterFormInput,
    RegisterHelperText,
    RegisterInput,
    RegisterModalWrapper,
    RegisterTitle,
    RegisterTitleWrapper,
    ModalRegisterButton,
    Span,
    FormFeedback,
} from './subcomponents'
import logo from "../../../assests/logo.png";
import lock from "../../../assests/login.png";
import {
    OTPModalDialog,
    OTPBodyWrapper,
    OTPFormInput,
    OTPHeaderWrapper,
    OTPHelperText,
    OTPInput,
    OTPLock,
    OTPLogo,
    OTPSubmitButton,
    OTPTitle,
    OTPTitleWrapper,
    OTPVerifyWrapper,
    OTPWrapper,
    ResendButton
} from '../OTPStyle/subcomponent'
import { getOTP } from '../../../redux/streamMaster/api'
import validateRegistration from './helper'
import { hasFormError } from '../../../helpers/formValidation'
import { RegisterField } from './typing'

interface RegisterProps {
    values: any
    //eslint-disable-next-line no-unused-vars
    setValues: (formValues: any) => void
    setLogin: any
    setRegister: any
}

const Register = ({
    values,
    setValues,
    setLogin,
    setRegister
}: RegisterProps): ReactElement => {
    const {
        countryList,
        stateList,
        countryPin
    } = useSelector(
        (state: RootState) => ({
            countryList: state.register.countryData,
            stateList: state.register.stateData,
            countryPin: state.register.countryPin,
        })
    )

    const CountyDropdown = countryList ? getCountryDropdown(countryList) : [];
    const StateDropDown = stateList ? getStateDropdown(stateList) : [];

    const [errors, setErrors] = useState({} as Record<string, string>)
    const [showOtp, setShowOtp] = useState(false);
    const [pin, setPin] = useState("+91");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [counter, setCounter] = useState(59);

    const dispatch = useDispatch()

    const validateBlur = (fields: RegisterField) => {
        setErrors(
            validateRegistration({
                values,
                errors,
                fields
            })
        )
    }

    const handleRegisterSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        const validationError = validateRegistration({
            values,
            errors
        })
        if (hasFormError(validationError)) {
            setErrors(validationError)
        } else {
            setRegister(true)
            dispatch(AddUserApi(values));
            dispatch(getOTP({
                username: values?.name,
                password: values?.password,
                to: `91${values?.mobile}`,
                from: 'CKCADD',
                text: 'Message',
                token: '23152918K7a944tgI8VicgTjjasVnWSYuXFkNP/6BlpKJBwIN+U=uZ$8A9dAN3pN$TYA8DP8',
                dlrmask: '19'
            }))
            setShowOtp(true)
        }
    };

    useEffect(() => {
        setPin(countryPin.map((x) => x.contact_no_code)[0]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countryPin]);

    return (
        <>
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
                                setLogin(true)
                                setRegister(false)
                            }}
                        >
                            Have an account ? <span>Login</span>
                        </RegisterHelperText>
                    </RegisterTitleWrapper>
                    <RegisterBodyWrapper onSubmit={handleRegisterSubmit} >
                        <FlexWrapper justifyContent="space-around">
                            <RegisterInput>
                                <RegisterFormInput
                                    placeholder="First Name"
                                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                        setValues({ ...values, name: e.target.value })
                                    }
                                    type="text"
                                    value={values?.name}
                                    onBlur={() => validateBlur('name')}
                                    isValid={!errors.name}
                                    isInvalid={!!errors.name}
                                />
                                <FormFeedback type='invalid'>{errors.name}</FormFeedback>
                            </RegisterInput>
                            <RegisterInput>
                                <RegisterFormInput
                                    placeholder="Last Name"
                                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                        setValues({ ...values, lastName: e.target.value })
                                    }
                                    value={values?.lastName}
                                    type="text"
                                    onBlur={() => validateBlur('lastName')}
                                    isValid={!errors.lastName}
                                    isInvalid={!!errors.lastName}
                                />
                                <FormFeedback type='invalid'>{errors.name}</FormFeedback>
                            </RegisterInput>

                            <RegisterInput>
                                <RegisterFormInput
                                    placeholder="Password"
                                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                        setValues({ ...values, password: e.target.value })
                                    }
                                    value={values?.password}
                                    type="text"
                                    onBlur={() => validateBlur('password')}
                                    isValid={!errors.password}
                                    isInvalid={!!errors.password}
                                />
                                <FormFeedback type='invalid'>{errors.password}</FormFeedback>
                            </RegisterInput>
                            <RegisterInput>
                                <RegisterFormInput
                                    placeholder="Comfirm Password"
                                    value={values?.confirmPassword}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                        setValues({ ...values, confirmPassword: e.target.value })
                                    }
                                    type="text"
                                    onBlur={() => validateBlur('confirmPassword')}
                                    isValid={!errors.confirmPassword}
                                    isInvalid={!!errors.confirmPassword}
                                />
                                <FormFeedback type='invalid'>{errors.confirmPassword}</FormFeedback>
                            </RegisterInput>
                            <RegisterInput>
                                <RegisterFormInput
                                    placeholder="E-mail"
                                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                        setValues({ ...values, email: e.target.value })
                                    }
                                    type="text"
                                    value={values?.email}
                                    onBlur={() => validateBlur('email')}
                                    isValid={!errors.email}
                                    isInvalid={!!errors.email}
                                />
                                <FormFeedback type='invalid'>{errors.email}</FormFeedback>
                            </RegisterInput>
                            <RegisterInput>
                                <EditableDropdown
                                    dropdownList={CountyDropdown}
                                    placeholder={"Select Countries"}
                                    defaultValue={CountyDropdown[100]}
                                    handleSelect={(value: DropdownListProps) => {
                                        setValues({ ...values, country: value?.name });

                                        dispatch(
                                            getStates({
                                                id: value?.id,
                                            })
                                        );
                                        dispatch(getCountryPin({ id: value?.id }));
                                    }}
                                />
                            </RegisterInput>
                            <RegisterInput>
                                <EditableDropdown
                                    dropdownList={StateDropDown}
                                    placeholder={"Select State"}
                                    handleSelect={(value: DropdownListProps) => {
                                        setValues({ ...values, state: value?.name });
                                        dispatch(getProfile());
                                    }}
                                    onBlur={() => validateBlur('state')}
                                    error={errors.state}
                                />
                            </RegisterInput>
                            <RegisterInput>
                                <Span>{values.country === "India" ? "+91" : pin}</Span>
                                <RegisterFormInput
                                    placeholder="Mobile No"
                                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                        setValues({ ...values, mobile: e.target.value })
                                    }
                                    type="text"
                                    value={values?.mobile}

                                    onBlur={() => validateBlur('mobile')}
                                    isValid={!errors.mobile}
                                    isInvalid={!!errors.mobile}
                                />
                                <FormFeedback type='invalid'>{errors.mobile}</FormFeedback>
                            </RegisterInput>
                        </FlexWrapper>
                        <FlexWrapper justifyContent="center" noPadding>
                            <ModalRegisterButton type="submit">Next</ModalRegisterButton>
                        </FlexWrapper>
                    </RegisterBodyWrapper>
                </RegisterModalWrapper>
            </RegisterWrapper>
            {showOtp && (
                <OTPModalDialog
                    show={true}
                    onHide={() => setShowOtp(false)}
                    centered={true}
                    dialogClassName="OTPdialog"
                    backdrop="false"
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
                                <OTPHelperText>
                                    Resend OTP in <span>00:{counter}</span>
                                </OTPHelperText>
                            </OTPVerifyWrapper>
                            <OTPBodyWrapper>
                                <OTPInput>
                                    <OTPFormInput placeholder="Enter OTP" />
                                </OTPInput>
                                <ResendButton>Resend OTP</ResendButton>
                                <OTPSubmitButton
                                    onClick={() => {
                                        setLogin(true);
                                        setShowOtp(false);
                                    }}
                                >
                                    Register
                                </OTPSubmitButton>
                            </OTPBodyWrapper>
                        </OTPTitleWrapper>
                    </OTPWrapper>
                </OTPModalDialog>
            )}
        </>
    )
}

export default Register