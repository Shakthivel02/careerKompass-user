import {
  ActionButton,
  UserHeader,
  FlexWrapper,
} from "../../components";
import {
  Bold,
  FlexWrap,
  PageWrapper,
  Logs,
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
  CongratLine,
  CongratWrapper
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
  const { Stream, userId, level, userName, cat, tools } = useSelector(
    (state: RootState) => ({
      Stream: state.stream.questions,
      userId: state.login.userInfo?.userId,
      level: state.stream.level.test_level,
      userName: state.Test.TestResponce.user,
      cat: state.Test.TestResponce.cat,
      tools: state.Test.TestResponce.tools,
    }),
    shallowEqual
  );
  const [badge] = Stream.map((x) => x.stream_name);
  const [FrstName] = userName.map((x) => x.user_name);
  const [LastName] = userName.map((x) => x.last_name);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [course] = cat.map((x) => x.course);

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
          <CongratWrapper>
            <CongratLine>
              Congratulation.. {FrstName} {LastName}
            </CongratLine>
          </CongratWrapper>
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

              As '{badge}' is your favourite stream.you could focus on making
              yourself conversant with laws governing flying,quality and
              performance of flying objects and the materials they are made
              of,and so on.

            </Para>
            <div>
              <ContentPageLogo src={badgeImg} />
              <RelativeWrap>
                <CareerKompass src={careerKompass} />
              </RelativeWrap>
            </div>
          </FlexWrapper>

          <FlexWrapper justifyContent="center">
            <CardWrapper2 >
              <Paras>
                You can have a great scope as a product analyst in Aeronautical
                Engineering. To shine as an analyst, focus on mastering the
                following CAD tools:
              </Paras>
              <FlexWrapper justifyContent="center">
                <UListWrapper>
                  {tools.map((x) => (
                    <ListText>{x.tool}</ListText>
                  ))}
                </UListWrapper>
              </FlexWrapper>
            </CardWrapper2>
          </FlexWrapper>
          <FlexWrapper>
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
          </FlexWrapper>
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
              <Heading>
                {badge} - {level}
              </Heading>
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
