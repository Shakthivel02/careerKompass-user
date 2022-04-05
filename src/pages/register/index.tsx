import React, { ChangeEvent, ReactElement, SyntheticEvent, useEffect, useState } from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { EditableDropdown } from '../../components'
import { DropdownListProps } from '../../components/EditableDropdown/typings'
import { getProfileDropdown, getStreamDropdown } from '../../helpers/dropdown'
import { AddUserApi, getProfile } from '../../redux/Register/api'
import { RootState } from '../../redux/store'
import { handleStreamMaster } from '../../redux/streamMaster/api'
import { ContainerWrapper, FormContainer, RegisterWrapper, Title } from './subcomponents'

const Register = (): ReactElement => {
    const {
        streamData,
        profileData,
        registerDetails
    } = useSelector(
        (state: RootState) => ({
            streamData: state.stream.streamMaster,
            profileData: state.register.profileData,
            registerDetails: state.register.registerDetails,
        }),
        shallowEqual
    )

    const dispatch = useDispatch()

    const StreamDropdown = streamData ? getStreamDropdown(streamData) : [];
    const ProfileDropdown = profileData ? getProfileDropdown(profileData) : [];

    const [values, setValues] = useState(registerDetails)

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        dispatch(AddUserApi(values))
    }

    useEffect(() => {
        
        dispatch(getProfile())
    }, [])

    return (
        <RegisterWrapper>
            <ContainerWrapper>
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
                    <InputGroup className="mb-3">
                        <EditableDropdown
                            dropdownList={ProfileDropdown}
                            placeholder={'Select Profile'}
                            handleSelect={(value: DropdownListProps) => {
                                setValues({ ...values, profile: value?.name })
                                dispatch(handleStreamMaster()) 
                            }}
                        />
                    </InputGroup>
                    <EditableDropdown
                        dropdownList={StreamDropdown}
                        placeholder={'Select Stream'}
                        handleSelect={(value: DropdownListProps) => {
                            setValues({ ...values, stream: value?.id })
                        }}
                    />
                    <Button className="mb-3 mt-3" type="submit">Submit</Button>
                </FormContainer>
            </ContainerWrapper>
        </RegisterWrapper>

    )
}

export default Register