/* eslint-disable no-lone-blocks */
import React, { ChangeEvent, ReactElement, SyntheticEvent, useEffect, useState } from 'react'
import { Button, Col, FormControl, InputGroup, Modal, Row } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {  EditableDropdown } from '../../components'
import { DropdownListProps } from '../../components/EditableDropdown/typings'
import ROUTES from '../../const/routes'
import { getProfileDropdown, getStreamDropdown } from '../../helpers/dropdown'
import { AddUserApi, getProfile } from '../../redux/Register/api'
import { RootState } from '../../redux/store'
import { handleStreamMaster, updateSelectedStream } from '../../redux/streamMaster/action'
import { ContainerWrapper, FormContainer, RegisterWrapper, Title, RLogo, RLogoWrapper } from './subcomponents'
import logo from '../../assests/logo.png' 

const Register = (): ReactElement => {
    const {
        streamList,
        profileData,
        registerDetails
    } = useSelector(
        (state: RootState) => ({
            streamList: state.stream.streamMaster,
            profileData: state.register.profileData,
            registerDetails: state.register.registerDetails,
        }),
        shallowEqual
    ) 
console.log(streamList);

    const dispatch = useDispatch()
    const history = useHistory()

    const StreamDropdown = streamList ? getStreamDropdown(streamList) : [];
    const ProfileDropdown = profileData ? getProfileDropdown(profileData) : [];
 

    const [otpModal, setOtpModal] = useState(false)
    const [values, setValues] = useState(registerDetails)

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        dispatch(AddUserApi(values))
        setOtpModal(true) 
    }


    const [otp, verifyOtp] = useState("");

    useEffect(() => {
        dispatch(getProfile())
        dispatch(handleStreamMaster())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 

    return (
        <RegisterWrapper>
            <ContainerWrapper>
                <RLogoWrapper>
                    <RLogo src={logo} alt="logo" />
                </RLogoWrapper>
                <Title>Register</Title>
                <FormContainer onSubmit={handleSubmit}>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder='UserName'
                            value={values.name}
                            name="name"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setValues({ ...values, name: e.target.value })
                            }
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder='LastName'
                            value={values.lastName}
                            name="lastName"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setValues({ ...values, lastName: e.target.value })
                            }
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder='email'
                            value={values.email}
                            name="email"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setValues({ ...values, email: e.target.value })
                            }
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder='Mobile No'
                            value={values.mobile}
                            name="mobile"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setValues({ ...values, mobile: e.target.value })
                            }
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder='Password'
                            value={values.password}
                            name="password"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setValues({ ...values, password: e.target.value })
                            }
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder='City'
                            value={values.city}
                            name="city"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setValues({ ...values, city: e.target.value })
                            }
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder='State'
                            value={values.state}
                            name="state"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setValues({ ...values, state: e.target.value })
                            }
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder='Country'
                            value={values.country}
                            name="country"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setValues({ ...values, country: e.target.value })
                            }
                        />
                    </InputGroup>
                    <Row>
                        <Col>
                            <EditableDropdown
                                dropdownList={ProfileDropdown}
                                placeholder={'Select Profile'} 
                                handleSelect={(value: DropdownListProps) => {
                                    setValues({ ...values, profile: value?.name })
                                     
                                }}
                            />
                        </Col>
                        <Col>
                            <EditableDropdown
                                dropdownList={StreamDropdown}
                                placeholder={'Select Stream'} 
                                handleSelect={(value: DropdownListProps) => {
                                    setValues({ ...values, stream: value?.id })
                                    dispatch(updateSelectedStream({
                                        streamID:value?.id
                                    }))
                                }}
                            />
                        </Col>
                    </Row>
                    <Button className="mb-3 mt-3" type="submit">Submit</Button>
                </FormContainer>
            </ContainerWrapper>
            {otpModal && (
                <Modal
                    show={true}
                    onHide={() => setOtpModal(false)}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Enter the OTP you received via SMS</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <InputGroup className="mb-3">
                            <FormControl
                                type="text"
                                name="otp"
                                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                    verifyOtp(event.target.value)
                                }
                                placeholder={'Enter OTP'}
                            />
                            <FormControl.Feedback type="invalid">{ }</FormControl.Feedback>
                        </InputGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="secondary"
                            onClick={() => setOtpModal(false)}
                        >
                            Cancel
                        </Button>
                        <Button onClick={() => history.push(ROUTES.LOGIN)} variant="primary">
                            Verify
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </RegisterWrapper>

    )
}

export default Register