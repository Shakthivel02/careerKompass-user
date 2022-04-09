import { ReactElement } from "react"
import {
    Container4,
    Details4,
    Header4,
    Body4,
    GCard,
    Image,
    CardWrapper1,
    PrivacyContainer,
    FinalFooter,
    FooterWrapper,
    Logo1,
    Links,
    FHeader,
    BrandIcon,
    Label,
    CardContainer,
    FinalWrapper,
    Input,
    Form,
    ButtonS, 
    Title,
    WWraper,
    CardRow,  
} from "../subcomponents"
import logo2 from "../../../assests/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import p1 from "../../../assests/p1.png"
import p2 from "../../../assests/p2.png"
import p3 from "../../../assests/p3.png"
import p4 from "../../../assests/p4.png"
import p5 from "../../../assests/p5.png"
import p6 from "../../../assests/p6.png"
import p7 from "../../../assests/p7.png"
import p8 from "../../../assests/p8.png"
import p9 from "../../../assests/p9.png"
import p10 from "../../../assests/p10.png"
import { Col } from "react-bootstrap"

const Footers = (): ReactElement => {
    return (

        <FinalWrapper>
            <Container4>
                <Details4>
                    <Header4>Guiding professionals</Header4>
                    <Body4>
                        on the path of making informed career choices in jus 30 minutes!!
                    </Body4>
                </Details4>
                <CardWrapper1>
                    <CardRow xs={2} sm={5}>
                        <Col>
                            <GCard>
                                <Image src={p1} />
                            </GCard>
                        </Col>
                        <Col>
                            <GCard>
                                <Image src={p2} />
                            </GCard>
                        </Col>
                        <Col>
                            <GCard>
                                <Image src={p3} />
                            </GCard>
                        </Col>
                        <Col>
                            <GCard>
                                <Image src={p4} />
                            </GCard>
                        </Col>
                        <Col>
                            <GCard>
                                <Image src={p5} />
                            </GCard>
                        </Col>
                    </CardRow>
                    <CardRow xs={2} sm={5}>
                        <Col>
                            <GCard>
                                <Image src={p6} />
                            </GCard>
                        </Col>
                        <Col>
                            <GCard>
                                <Image src={p7} />
                            </GCard>
                        </Col>
                        <Col>
                            <GCard>
                                <Image src={p8} />
                            </GCard>
                        </Col>
                        <Col>
                            <GCard>
                                <Image src={p9} />
                            </GCard>
                        </Col>
                        <Col>
                            <GCard>
                                <Image src={p10} />
                            </GCard>
                        </Col>
                    </CardRow>
                </CardWrapper1>
                <CardContainer>
                    <WWraper>
                        <Title>Subscribe for NewLetter</Title>
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
    );
};

export default Footers;
