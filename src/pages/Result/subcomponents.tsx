import styled from "styled-components";
import { ReactElement } from "react";
import { CardWrapper, FlexWrapper, PageWrapper } from "../../components";
import { Figure } from "react-bootstrap";

export const Logo = styled(Figure.Image)`
  width: 20%;
`;

export const LogoWrapper = styled(Figure)`
  margin-top: 1%;
  margin-left: 2%;
`;

export const TextWrapper = styled.div`
  width: 100%;
  margin-left: 4%;
`;

export const H1 = styled.h1`
  color: rgb(68, 70, 212);
  font-weight: 700;
  font-size: 34px;
  font-family: "Open Sans", sans-serif;
  padding-top: 2%;
`;

export const H3 = styled.h3`
  font-weight: 300;
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  padding-top: 2%;
`;

export const FooterImage = styled(Figure.Image)`
  width: 100%;
`;

export const ContentPageLogo = styled(Figure.Image)`
  width: 16%;
  margin-left: 2%;
  margin-top: 2%;
`;

interface ParaProps {
  marginTop?: string;
  color?: string;
  marginLeft?: string;
}
export const Para = styled.p<ParaProps>`
  font-weight: 100;
  font-family: "Open Sans", sans-serif;
  font-size: 13px;
  line-height: 1.6;
  margin-left: ${({ marginLeft }) => (marginLeft ? `${marginLeft}%` : "5%")};
  margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}%` : "0%")};
  color: ${({ color }) => (color ? color : "black")};
`;

export const SideTitles = styled.p`
  font-weight: 600;
  font-family: sans-serif;
  font-size: 14px;
  margin-left: 5%;
  width: 100%;
  color: ${({ color }) => (color ? color : null)};
`;

export const Quote = styled.span`
  font-weight: 600;
  font-family: sans-serif;
  font-style: italic;
  font-size: 12px;
  word-spacing: 2px;
  color: ${({ color }) => (color ? color : "black")};
  text-align: center;
`;

const UnOrderList = styled.ul`
  color: rgb(253, 126, 20);
  padding-left: 8%;
  margin-top: -8px;
`;

const List = styled.span`
  padding-left: 4px;
  font-family: "Open Sans", sans-serif;
  font-weight: 100;
  font-size: 14px;
  color: black;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: rgb(51, 53, 207);
`;

const Badge = styled(Figure.Image)`
  width: 26%;
  padding: 2%;
  @media (max-width: 700px) {
    width: 32%;
  }
`;
const BadgeText = styled.p`
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  color: ${({ color }) => (color ? color : null)};
  margin-top: 16%;
  @media (max-width: 700px) {
    margin-top: 12%;
  }
`;
const BadgePara = styled.p`
  font-weight: 100;
  font-family: "Open Sans", sans-serif;
  font-size: 13px;
  line-height: 1.6;
  color: white;
  width: 100%;
`;
const ListFlex = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  margin-left: 8%;
  margin-top: 2%;
`;
const ListWrapper = styled.div`
  width: 100%;
`;

const Certificate = styled.div`
  display: flex;
  justify-content: space-around;
  width: 36%;
  border: 1px solid rgb(68, 70, 212);
  border-radius: 12px;
  margin-left: 4%;
  margin-bottom: 4%;
`;
const CertificateLogo = styled(Figure.Image)`
  width: 24%;
  margin-top: 2%;
`;

const CertificateText = styled.p`
  color: rgb(253, 126, 20);
  font-size: 16px;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  margin-top: 6%;
`;
const OrangeLine = styled.hr`
  color: rgb(255, 140, 0);
  border: 4px solid rgb(255, 140, 0);
  width: 100%;
  opacity: 2;
`;
const PageNumber = styled.div`
  width: 60px;
  height: 60px;
  padding: 20px;
  background-color: rgb(68, 70, 212);
  color: white;
`;
const PageNumberWrapper = styled.div`
  display: flex;
  justify-content: right;
  position: relative;
  margin-bottom: -3%;
`;

const Span = styled.span`
  font-size: 16px;
`;

const UListWrapper = styled.ul`
  margin-top: 4%;
  margin-left: 6%;
  line-height: 2;
`;

const ListText = styled.li`
  font-style: italic;
  font-size: 16px;
`;
const Hr = styled.hr`
  border-top: 5px solid rgb(68, 70, 212);
  width: 16%;
  border-radius: 8px;
`;
const BoldOrangeText = styled.p`
  font-style: italic;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  color: rgb(253, 126, 20);
`;
const Steps = styled(Figure.Image)`
  width: 30%;
`;
const FinalFooter = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: rgb(68, 70, 212);
  width: 100%;
  padding: 4px;
`;
export const ResultPages = (): ReactElement => {
  return (
    <>
      <PageWrapper className="container A4">
        <CardWrapper width="80">
          <LogoWrapper>
            <Logo alt="Logo" src="/assets/logo.png" />
          </LogoWrapper>
          <TextWrapper>
            <H3>
              In the Waves of Change, we help You find your Direction:
              <br /> Navigate using CareerKompass
            </H3>
            <H1>
              Develop required skills and
              <br /> Choose the Career you love.
            </H1>
            <H3>Student details</H3>
            <H3>
              It is all about starting right.
              <br /> You are just one assessment away from making the right
              career decision.
            </H3>
          </TextWrapper>
          <FooterImage src="/assets/pageOneBanner.png" />
        </CardWrapper>
      </PageWrapper>

      <PageWrapper className="container A4">
        <CardWrapper width="80">
          <ContentPageLogo src="/assets/logo.png" />
          <Para>
            CareerKompass is a Learning Assessment App offering much-needed
            guidance for contemporary
            <br /> technological, engineering, managerial and design careers.
            The assessment report serves as a<br /> pointer to the proper career
            choice for the assesses.
          </Para>
          <SideTitles color="rgb(68, 70, 212)">Dear Test taker,</SideTitles>
          <Para>
            Congratulations on opting to take the Skill Assessment test with us.
          </Para>
          <Quote color="rgb(253,126,20)">
            "The only way to do great work is to love what you do. If you
            haven't found it yet, keep looking. Don't settle."
          </Quote>
          <Quote color="rgb(68, 70, 212)">-Steve jobs</Quote>
          <Para marginTop="2">
            These words ring so true. Making a wrong career choice might lead
            you to a workplace that never appeals to
            <br /> you. But at this juncture, you stand confused as to which
            career you want to pursue, right? A practical Aptitude
            <br /> Assessment will help you realize your core strengths and
            guide you to a career path that suits your tempera-
            <br />
            ment and abilities the best.
          </Para>
          <Para>
            The Careerkompass Assessments provide insights into current skill
            sets and establish a reference point from
            <br /> which future moves can be predicted and executed.
          </Para>
          <Para>
            A personalized, comprehensive, objective report is generated, which
            is downloadable. Further, we provide
            <br /> recommendations based on the information to help you take
            future career-defining decisions.
          </Para>
          <Para>
            The professionally designed questionnaire is based on the
            requirements of real-world businesses and industries.
          </Para>
          <SideTitles>Your answers reveal a lot:</SideTitles>
          <UnOrderList>
            <li>
              <List>What is your approach to a problem?</List>
            </li>
            <li>
              <List>In which field do your inclinations lie?</List>
            </li>
            <li>
              <List>What kind of profile will suit you the best?</List>
            </li>
            <li>
              <List>What are your strengths?</List>
            </li>
            <li>
              <List>Where lies your weaknesses?</List>
            </li>
          </UnOrderList>
          <Para>
            Your scores in different test sections make it clear where your
            heart lies and which field you will shine in <br />
            the most.
          </Para>
          <Para>
            We at Careerkompass have put in hours of research to create the test
            that will guide students on finding
            <br /> their interests. This is not about attaining a particular
            score; it is more about which section of the test you
            <br /> score more, which helps us analyze your strengths and pain
            points, and we render advice accordingly.
          </Para>
          <Para>
            Find your calling by taking this test and accelerate your career
            growth.
          </Para>
          <Para>Good Luck,</Para>
          <Para color="rgb(68, 70, 212)" marginTop="-2">
            XXXXX
          </Para>
          <PageNumberWrapper>
            <PageNumber>01</PageNumber>
          </PageNumberWrapper>
          <OrangeLine />
        </CardWrapper>
      </PageWrapper>
      <PageWrapper className="container A4">
        <CardWrapper width="80">
          <ContentPageLogo src="/assets/logo.png" />
          <Flex>
            <Badge src="/assets/badge.png" />
            <div>
              <BadgeText color="white">Your Badge: ANALYST</BadgeText>
              <BadgePara>
                You are a ‘numbers’ person. Data, metrics, and other
                <br /> ways of quantifications excite you a bit more than
                <br /> designs do. You are also strong in basic sciences.
                <br /> These traits provide a great scope for you to become
                <br /> an expert analyst in Product Design.
              </BadgePara>
            </div>
          </Flex>
          <Para marginLeft="4" marginTop="2">
            Given below are some of the software tools that will help you
            establish your presence as a product analyst:
          </Para>
          <ListFlex>
            <ListWrapper>
              <SideTitles>Analysis</SideTitles>
              <UnOrderList>
                <li>
                  <List>Creo Simulate</List>
                </li>
                <li>
                  <List>NX Nastran</List>
                </li>
                <li>
                  <List>Ansys Workbench</List>
                </li>
                <li>
                  <List>Creo Simulate</List>
                </li>
                <li>
                  <List>Ansys Fluent</List>
                </li>
              </UnOrderList>
            </ListWrapper>
            <ListWrapper>
              <SideTitles>Mechanism Simulation</SideTitles>
              <UnOrderList>
                <li>
                  <List>CATIA - Kinematics</List>
                </li>
                <li>
                  <List>SolidWorks - Motion</List>
                </li>
              </UnOrderList>
            </ListWrapper>
          </ListFlex>
          <Para>
            CloudKampus offers Certified programs that equip you with these
            software skills and technical acumen
            <br /> required for excelling as an Analyst. These programs also
            assure you internship / placement opportunities.
          </Para>
          <SideTitles>
            Following are the recommended CloudKampus Certified programs for
            you:
          </SideTitles>
          <Certificate>
            <CertificateLogo src="/assets/certificate.png" />
            <CertificateText>Certified Data Analyst</CertificateText>
          </Certificate>
          <SideTitles color="rgb(253,126,20)">Subscription Plan: </SideTitles>
          <Para>
            You can choose a subscription plan suitable for you and enroll in a
            number of individual courses and learn all the
            <br /> recommended software / skills - without having to pay for
            each and every course separately. Subscription plans
            <br /> are the best when you want to learn more than one course.
          </Para>
          <SideTitles color="rgb(253,126,20)">Individual programs:</SideTitles>
          <Para>
            CloudKampus offers niche, standalone courses in the recommended
            software tools and skills. You can always
            <br /> take up these courses.
          </Para>
          <PageNumberWrapper>
            <PageNumber>02</PageNumber>
          </PageNumberWrapper>
          <OrangeLine />
        </CardWrapper>
      </PageWrapper>
      <PageWrapper className="container A4">
        <CardWrapper width="80">
          <ContentPageLogo src="/assets/logo.png" />
          <SideTitles>
            Know More About our Online Learning Portal, Cloudkampus
          </SideTitles>
          <Para marginTop="4%">
            Our online learning portal, Cloudkampus, facilitates in-demand
            training using a wide array of resources, leverag-
            <br />
            ing the services of highly specialized trainers. We offer certified
            courses in varied domains that are focused on
            <br /> career enhancement. Industry experts craft the curriculum of
            the courses, and we also provide relevant intern-
            <br />
            ships and placements
          </Para>
          <Para>
            The learner has the advantage of choosing between his schedule
            rather than fit into rigid time slots. We make
            <br /> use of immersive state of the art technologies to make
            learning effective and fast-paced. Live courses are <br /> catering
            to a plethora of industries and skill upgrades. Project-based
            assessments are conducted, and a certifi-
            <br />
            cate is given on successful course completion
          </Para>
          <Para>
            The other advantage is that learning can happen anytime from
            anywhere with us. We are backed by
            <Span> CADD Centre</Span>, the world's largest global network of
            skill development institutes, with
          </Para>
          <UListWrapper>
            <ListText>35+ years of domain expertise.</ListText>
            <ListText>600,000+Training Hours Delivered</ListText>
            <ListText>250+ Qualified Trainers on board</ListText>
            <ListText>400+ Courses across segments</ListText>
          </UListWrapper>
          <SideTitles>Conclusion</SideTitles>
          <Para>
            There are short term as well as in-depth courses. The content is
            delivered in highly engaging, technology-aided,
            <br /> interactive formats like videos, mini-lectures and e-books.
            Assessments, quizzes and other evaluation processes
            <br /> are undertaken from time to time to keep learning on track.
            There is engineering, manufacturing, design
            <br />
            segments, and futuristic technologies courses
          </Para>
          <FlexWrapper justifyContent="center">
            <Hr />
          </FlexWrapper>
          <FlexWrapper justifyContent="space-around">
            <div style={{ marginTop: "5%" }}>
              <BoldOrangeText>
                We believe that if you are determined to learn,
                <br /> no one can stop you
              </BoldOrangeText>
              <BoldOrangeText>
                We make your learning journey easier
              </BoldOrangeText>
            </div>
            <Steps src="/assets/steps.png" />
          </FlexWrapper>
          <FinalFooter>
            <Para marginTop="2" color="white">
              © 2022 Careerkampus. All rights reserved
            </Para>
            <Para marginTop="2" color="white">
              www.careerkampus.com
            </Para>
          </FinalFooter>
        </CardWrapper>
      </PageWrapper>
    </>
  );
};
