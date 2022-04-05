import { ReactElement } from "react";
import { CardWrapper, FlexWrapper, PageWrapper } from "../../components";
import { H2 } from "../../typography";

const Result = (): ReactElement => {
  var items = [
    "App Developer",
    "Front-End Designer",
    "Full-Stack Developer",
    "Consultant",
  ];
  var Results = items[Math.floor(Math.random() * items.length)];
  return (
    <PageWrapper>
      <FlexWrapper justifyContent="center">
        <CardWrapper>
          <FlexWrapper justifyContent="center">
            <H2>Result</H2>
          </FlexWrapper>
          <FlexWrapper justifyContent="center">
            <h5>You have more potential to be a</h5>
            <H2 color="rgb(242,127,54)">{Results}</H2>
          </FlexWrapper>
        </CardWrapper>
      </FlexWrapper>
    </PageWrapper>
  );
};

export default Result;
