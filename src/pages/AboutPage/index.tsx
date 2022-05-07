import { shallowEqual, useSelector } from "react-redux";
import { ActionButton, FlexWrapper, PageWrapper, UserHeader } from "../../components";
import { RootState } from "../../redux/store";
import {
    Para,
    Title,
    AboutImage,
    FlexWrap,
    CardContainer,
    Container4,
    WWraper,
    Titles,
    Input,
    Form,
    ButtonS,
    PrivacyContainer,
    FooterWrapper,
    Logo1,
    FinalFooter,
    BrandIcon,
    FHeader,
    Links,
    FinalWrapper
} from "../AboutPage/subcomponents";
import Ab from "../../assests/Group.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo2 from "../../assests/logo.png"

const AboutPage = () => {
    const { Stream, userId } = useSelector(
        (state: RootState) => ({
            Stream: state.stream.questions,
            userId: state.login.userInfo?.userId,
        }),
        shallowEqual
    );
    const [badge] = Stream.map((x) => x.stream_name);
    return (
        <PageWrapper>
            <FlexWrap>
                <UserHeader />
            </FlexWrap>
            <Title>About</Title>
            <FlexWrapper>
                <AboutImage src={Ab} />
                <Para> Transforming education for millions of aspirants with various learning<br />
                    modes and innovative teaching techniques, Cloudkampus has arrived asa<br />
                    reputed global online institution, settingaworld-class learning<br />
                    environment.
                    <br />
                    <br />
                    With well-designed study materials, specially curated courses, and <br />
                    certifications to develop in-demand technology, design, and management <br />
                    skills, Cloudkampus aims to goastep beyond and revolutionize the practice <br />
                    of career decision-making with Careerkompass's App.
                    <br />
                    <br />
                    Careerkompass helps students and professionals steer their course towards<br />
                    findingascientific approach to making crucial work decisions. Building on<br />
                    self-exploration, strength identification, and maximizing inputs fora<br />
                    successful future, Careerkompass empowers students to establish possible<br />
                    success and fulfilment with different career options based on their<br />
                    personality and skills. Along with assessment and matching preferences,<br />
                    Careerkampus also plotsacourse for the future with two different levels,<br />
                    one for beginners and another for experienced individuals.</Para>
            </FlexWrapper>

            <FinalWrapper>
                <Container4>
                    <CardContainer>
                        <WWraper>
                            <Titles>Subscribe for NewLetter</Titles>
                            <Input>
                                <Form placeholder="Email here..." />
                                <ButtonS>Send</ButtonS>
                            </Input>
                        </WWraper>
                    </CardContainer>
                </Container4>
                <PrivacyContainer>
                    <FooterWrapper>
                        <div>
                            <Logo1 src={logo2} />
                            <BrandIcon>
                                <FontAwesomeIcon icon={["fab", "facebook"]} />
                            </BrandIcon>
                            <BrandIcon>
                                <FontAwesomeIcon icon={["fab", "twitter"]} />
                            </BrandIcon>
                            <BrandIcon>
                                <FontAwesomeIcon icon={["fab", "linkedin"]} />
                            </BrandIcon>
                        </div>
                        <div>
                            <FHeader>Links</FHeader>
                            <Links>Home</Links>
                            <Links>Course</Links>
                            <Links>Contact</Links>
                        </div>
                        <div>
                            <FHeader>Support</FHeader>
                            <Links>FAQ</Links>
                            <Links>Features</Links>
                        </div>
                        <div>
                            <FHeader>Contact Us</FHeader>
                            <Links>+91-1234567890</Links>
                            <Links>demo@gmail.com</Links>
                            <Links>Chennai 600-004</Links>
                        </div>
                    </FooterWrapper>
                    <FinalFooter>
                        <div>Copyright & Designed By CareerKompass</div>
                        <div>Terms | Privacy Policy</div>
                    </FinalFooter>
                </PrivacyContainer>
            </FinalWrapper>

        </PageWrapper>
    );
};

export default AboutPage;