import { ReactElement } from "react";
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
  FirstLabels,
  Form,
  LastLabels,
  ButtonS,
  Title,
  WWraper,
  Labels,
  CardRow,
} from "../subcomponents";
import logo2 from "../../../assests/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import product from "../../../assests/product design.svg";
import structural from "../../../assests/structural.svg";
import ev from "../../../assests/evTech.svg";
import auto from "../../../assests/automotive.svg";
import aero from "../../../assests/aero.svg";
import data from "../../../assests/data science.svg";
import trans from "../../../assests/Group 2540.svg";
import civil from "../../../assests/Group 41962.svg";
import arch from "../../../assests/Group 41946.svg";
import ic from "../../../assests/Group 41999.svg";
import { Col } from "react-bootstrap";

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
                <Image src={product} />
              </GCard>
              <Labels>Product Design</Labels>
            </Col>
            <Col>
              <GCard>
                <Image src={structural} />
              </GCard>
              <FirstLabels>Structural</FirstLabels>
            </Col>
            <Col>
              <GCard>
                <Image src={ev} />
              </GCard>
              <Labels>EV Technology</Labels>
            </Col>
            <Col>
              <GCard>
                <Image src={auto} />
              </GCard>
              <FirstLabels>Automotive</FirstLabels>
            </Col>
            <Col>
              <GCard>
                <Image src={aero} />
              </GCard>
              <Labels>Aeronautical</Labels>
            </Col>
            <Col>
              <GCard>
                <Image src={data} />
              </GCard>
              <Labels>Data Science</Labels>
            </Col>
            <Col>
              <GCard>
                <Image src={trans} />
              </GCard>
              <Labels>Transportation</Labels>
            </Col>
            <Col>
              <GCard>
                <Image src={civil} />
              </GCard>
              <LastLabels>Civil</LastLabels>
            </Col>
            <Col>
              <GCard>
                <Image src={arch} />
              </GCard>
              <Labels>Architectural</Labels>
            </Col>
            <Col>
              <GCard>
                <Image src={ic} />
              </GCard>
              <LastLabels>IT&CS</LastLabels>
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
