import { ReactElement, useEffect } from "react"
import { EditableDropdown, FlexWrapper } from '../../components'
import { HamburgerMenu, Logo, LogoWrapper, MenuContainer, Wrapper } from '../LandingPage/subcomponents'
import {
    Body,
    ContainerWrapper,
    DropdownWrapper,
    Header1,
    Header2,
    HeaderWrapper,
    LeftBack,
    StreamHeader,
    StreamWrapper,
    TestButton
} from './subcomponent'
import logo from '../../assests/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { getLevelsDropdown, getStreamDropdown } from "../../helpers/dropdown"
import { RootState } from "../../redux/store"
import { getLevel, handleStreamMaster } from "../../redux/streamMaster/api"

const StreamSelection = (): ReactElement => {
    const {
        streamList,
        levelData
    } = useSelector(
        (state: RootState) => ({
            streamList: state.stream.streamMaster,
            levelData: state.stream.levelsData,
        }),
        shallowEqual
    )
    const StreamDropdown = streamList ? getStreamDropdown(streamList) : [];
    const LevelDropdown = levelData ? getLevelsDropdown(levelData) : []

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(handleStreamMaster())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContainerWrapper>
            <LeftBack></LeftBack>
            <HeaderWrapper>
                <LogoWrapper>
                    <Logo src={logo} />
                </LogoWrapper>
                <Wrapper>
                    <MenuContainer>Menu</MenuContainer>
                    <HamburgerMenu>
                        <FontAwesomeIcon icon={['fas', 'bars']} size="lg" />
                    </HamburgerMenu>
                </Wrapper>
            </HeaderWrapper>
            <Body>
                <Header1>What do you aspire</Header1>
                <Header2>to become in next five years?</Header2>
                <StreamWrapper>
                    <StreamHeader>  Select Stream &<br></br> Level to Take test     </StreamHeader>
                    <DropdownWrapper>
                        <EditableDropdown
                            dropdownList={StreamDropdown}
                            placeholder={'Select Stream'}
                            handleSelect={() => {
                                dispatch(getLevel())
                            }} />
                    </DropdownWrapper>
                    <DropdownWrapper>
                        <EditableDropdown
                            dropdownList={LevelDropdown}
                            placeholder={'Select Level'}
                            handleSelect={() => { }} />
                    </DropdownWrapper>

                </StreamWrapper>
            </Body><FlexWrapper>
                <TestButton>Take Assement</TestButton>
            </FlexWrapper>
        </ContainerWrapper >
    )
}

export default StreamSelection