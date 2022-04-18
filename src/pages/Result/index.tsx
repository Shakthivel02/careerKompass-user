import { ReactElement } from "react";
import { UserHeader } from "../../components"; 
import { ResultContainer } from "./subcomponents";

const Result = (): ReactElement => {
  var items = [
    "App Developer",
    "Front-End Designer",
    "Full-Stack Developer",
    "Consultant",
  ];
  var Results = items[Math.floor(Math.random() * items.length)];

  return (
    <ResultContainer> 
       <UserHeader/> 
       
    </ResultContainer>
  );
};

export default Result;
