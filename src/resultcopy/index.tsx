import { ActionButton, UserHeader, CardWrapper, FlexWrapper, Header } from '../components';
import {
  Bold,
  FlexWrap,
  PageWrapper,
  Logo,
  Logs,
  Label,
  Text,
  FirstWrapper,
  Titles,
  ViewButton,
  LastLogo,
  DownloadButton,
  ContentLogo,
  Heading,
  CardLogo,
  ThirdWrapper,
  SecondWrapper,
  UListWrapper,
  ListText,
  Paras,
  Title,
  FinalFooter,
  SubmitButton,
  Buttons,
  Para,
  ContentPageLogo,
  SideTitles,
} from "../resultcopy/sucomponents";
import aero from "../assests/aero.png";
import log from "../assests/ak3.png";
import ak from "../assests/ak1.png";
import logo from "../assests/ak2.png";
import Gp from "../assests/Gp1.png";
import Image from "react-bootstrap/Image";
import ab from "../assests/ak4.png";

const ResultCopy = () => {
  return (
    <PageWrapper>
      <UserHeader />
      <FlexWrap>
        <Bold>Your brightest path is out there.Get started!!</Bold>
        <Logs src={Gp} />
        <div id="logoWrapper">
          <ActionButton
            id="logoWrapper"
            marginTop="30"
            backgroundColor="#3335CF"
          >
            <Logo src={aero} /> Aeronautical
          </ActionButton>
        </div>
      </FlexWrap>

      <FlexWrapper>
        <FirstWrapper>
          <Label>Congratulation.. suresh Kumar</Label>
          <Title>Your are a Analyst</Title>
          <FlexWrapper>
            <Para>
              You love gaining knowledge in various science and engineering
              disciplines.You will like the challenge of contributing to the
              continuous improvement of products.You can immerse yourself in
              calculations that tell how durable and reliable different
              components are.You are also enthusiastic about documenting the
              difference in performances of things under different external
              conditions.
              <br />
              As 'aeronautical engineering' is your favourite stream.you could
              focus on making yourself conversant with laws governing
              flying,quality and performance of flying objects and the materials
              they are made of,and so on.
            </Para>
            <ContentPageLogo src={ak} />
          </FlexWrapper>
          <CardWrapper width="60%" height="20%">
            <Paras>
              You can have a great scope as a product analyst in Aeronautical
              Engineering. To shine as an analyst, focus on mastering the
              following CAD tools:
            </Paras>
            <FlexWrapper>
              <UListWrapper>
                <ListText>Ansys</ListText>
                <ListText> Ansys Fluent</ListText>
                <ListText> HyperMesh</ListText>
              </UListWrapper>
              <ContentLogo src={logo} />
            </FlexWrapper>
          </CardWrapper>
          <SideTitles>Certified programs</SideTitles>
          <Paras>
            Cloudkampus offers Certified programs that equip you with the
            recommended software and technical acumen required for excelling as
            an analyst. This program also assures you internship / placement
            opportunities. Following is the recommended Cloudkampus Certified
            program for you:
          </Paras>
          <CardWrapper>
            <CardLogo src={log} />
            <Titles> Certified FEA Aviation Engineer</Titles>
            <ViewButton>View program</ViewButton>
          </CardWrapper>
          <SideTitles>Subscription plan</SideTitles>
          <Paras>
            You can choose a subscription plan suitable for you and enroll in a
            number of individual courses and learn all the recommended software
            / skills - without having to pay for each and every course
            separately. Subscription plans are the best when you want to learn
            more than one course.
          </Paras>
          <SideTitles>Individual programs</SideTitles>
          <Paras>
            CloudKampass offers niche,standalone courses in the recommended
            software. you can always take up these couses
          </Paras>
          <FinalFooter>
            <Text>Enquire Now</Text>
            <SubmitButton> Email us</SubmitButton>
            <Buttons>Chat with us</Buttons>
          </FinalFooter>
        </FirstWrapper>
        <ThirdWrapper>
          <Titles> Your Result Document for</Titles>
          <Heading>Aeronautical-Product Head</Heading>
          <LastLogo src={ab} />
          <DownloadButton>Download</DownloadButton>
        </ThirdWrapper>
      </FlexWrapper>
    </PageWrapper>
  );
};

export default ResultCopy;
