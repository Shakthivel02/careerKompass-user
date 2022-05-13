
import { FlexWrapper } from "../../components";
import {
  Para,
  Title,
  AboutImage,
  FlexWrap,
  Container4,
  PrivacyContainer,
  FooterWrapper,
  Logo,
  Logo1,
  FinalFooter,
  BrandIcon,
  PageWrapper,
  FHeader,
  Links,
  FinalWrapper,
  LogoWrapper,
  FormCardWrapper,
  FormCard,
  FormCardContent,
  FormCardText,
  FormCardInput,
  FormCardButton
} from "../AboutPage/subcomponents";
import Ab from "../../assests/Group.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo2 from "../../assests/logo.png";
import logo from "../../assests/about.png"
import { Header } from "../../components";
import { ReactElement } from "react";

const AboutPage = ():ReactElement => {
  return (
    <PageWrapper>
      <Header />
      <FlexWrap>
      </FlexWrap>
      <Title>About</Title>
      <FlexWrapper>
        <AboutImage src={Ab} />
        <Para>
          Transforming education for millions of aspirants with various learning
          modes and innovative teaching techniques, Cloudkampus has arrived as a
          reputed global online institution, settingaworld-class learning
          environment.
          <br />
          With well-designed study materials, specially curated courses, and
          certifications to develop in-demand technology, design, and management
          skills, Cloudkampus aims to goastep beyond and revolutionize the practice
          of career decision-making with Careerkompass's App.
          <br />
          Careerkompass helps students and professionals steer their course towards
          findingascientific approach to making crucial work decisions. Building on
          self-exploration, strength identification, and maximizing inputs for a
          successful future, Careerkompass empowers students to establish possible
          success and fulfilment with different career options based on their
          personality and skills. Along with assessment and matching preferences,
          Careerkampus also plotsacourse for the future with two different levels,
          one for beginners and another for experienced individuals.
          
        </Para>

      </FlexWrapper>

      <LogoWrapper >
      <Logo src={logo} />
      </LogoWrapper>
      <FinalWrapper>
        <Container4>
          <FormCardWrapper>
            <FormCard>
              <FormCardContent>
                <FormCardText>Subscribe For Newsletter</FormCardText>
                <FormCardInput placeholder="   Email here" />
                <FormCardButton>Send</FormCardButton>
              </FormCardContent>
            </FormCard>
          </FormCardWrapper>
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
          <FinalFooter >
            <div>Copyright & Designed By CareerKompass</div>
            <div>Terms | Privacy Policy</div>
          </FinalFooter>
        </PrivacyContainer>
      </FinalWrapper>
    </PageWrapper>
  );
};

export default AboutPage;