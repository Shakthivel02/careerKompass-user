import {
  ActionButton,
  UserHeader,
  CardWrapper,
  FlexWrapper,
} from "../../components";
import {
  Bold,
  FlexWrap,
  PageWrapper,
  Logs,
  Label,
  Text,
  FirstWrapper,
  Titles,
  LastLogo,
  DownloadButton,
  Heading,
  ThirdWrapper,
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
  Sticky,
  RelativeWrap,
  CareerKompass,
  CardWrapper2,
  Recommanded,
  Paras2,
} from "./sucomponents";
import badgeImg from "../../assests/badge.svg";
import Gp from "../../assests/Gp1.png";
import ab from "../../assests/ak4.png";
import careerKompass from "../../assests/careerKompass.svg";
import Download from "../../redux/result/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Result = () => {
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
            {badge}
          </ActionButton>
        </div>
      </FlexWrap>

      <FlexWrapper>
        <FirstWrapper>
          <CardWrapper width="100%" marginleft="-4%">
            <Label>Congratulation.. suresh Kumar</Label>
          </CardWrapper>
          <Title>Your are a Analyst</Title>
          <FlexWrapper justifyContent="space-around">
            <Para>
              You love gaining knowledge in various science and engineering
              disciplines.You will like the challenge of contributing to the
              continuous improvement of products.You can immerse yourself in
              calculations that tell how durable and reliable different
              components are.You are also enthusiastic about documenting the
              difference in performances of things under different external
              conditions.
              As 'aeronautical engineering' is your favourite stream.you could
              focus on making yourself conversant with laws governing
              flying,quality and performance of flying objects and the materials
              they are made of,and so on.
            </Para>
            <div>
              <ContentPageLogo src={badgeImg} />
              <RelativeWrap>
                <CareerKompass src={careerKompass} />
              </RelativeWrap>
            </div>
          </FlexWrapper>
          <FlexWrapper justifyContent="center">
            <CardWrapper2 width="75%" height="20%">
              <Paras>
                You can have a great scope as a product analyst in Aeronautical
                Engineering. To shine as an analyst, focus on mastering the
                following CAD tools:
              </Paras>
              <FlexWrapper justifyContent="center">
                <UListWrapper>
                  <ListText>Ansys</ListText>
                  <ListText> Ansys Fluent</ListText>
                  <ListText> HyperMesh</ListText>
                </UListWrapper>
              </FlexWrapper>
            </CardWrapper2>
          </FlexWrapper>
          <Recommanded>Following are the recommended CloudKampus Certified programs for you:</Recommanded>

          <SideTitles>Subscription plan :</SideTitles>
          <Paras2>
            You can choose a subscription plan suitable for you and enroll in a
            number of individual courses and learn all the recommended software
            / skills - without having to pay for each and every course
            separately. Subscription plans are the best when you want to learn
            more than one course.
          </Paras2>
          <SideTitles>Individual programs :</SideTitles>
          <Paras2>
            CloudKampass offers niche,standalone courses in the recommended
            software. you can always take up these courses
          </Paras2>
          <FinalFooter>
            <Text>Enquire Now</Text>
            <SubmitButton> Email us</SubmitButton>
            <Buttons>Chat with us</Buttons>
          </FinalFooter>
        </FirstWrapper>
        <ThirdWrapper>
          <Sticky>
            <FlexWrapper justifyContent="center">
              <Titles> Your Result Document for</Titles>
              <Heading>Aeronautical-Product Head</Heading>
              <LastLogo src={ab} />
            </FlexWrapper>
            <FlexWrapper justifyContent="center" marginTop={-8}>
              <DownloadButton
                onClick={() => {
                  Download(userId);
                }}
              >
                <FontAwesomeIcon icon={["fas", "download"]} size="sm" />
                <span style={{ marginLeft: "3%" }}>Download</span>
              </DownloadButton>
            </FlexWrapper>
          </Sticky>
        </ThirdWrapper>
      </FlexWrapper>
    </PageWrapper>
  );
};

export default Result;
