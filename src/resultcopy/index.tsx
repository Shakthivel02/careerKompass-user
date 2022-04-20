
import { ActionButton, CardWrapper, UserHeader,FlexWrapper } from '../components';
import { Bold, FlexWrap,PageWrapper,Logos,CardFooter,CardTitle,CardText,Images,Logo,Label,Title,Text,SubmitButton} from '../resultcopy/sucomponents';
import aero from '../assests/aero.png'
import log from '../assests/abd2.png'
import logo from '../assests/abd1.png'



const ResultCopy = () => {
  return (
    <PageWrapper>
    <UserHeader />
    <FlexWrap>
      <Bold>Selected Stream & Level</Bold>
      <div id="logoWrapper">
        <ActionButton
          id="logoWrapper"
          marginTop="30"
          backgroundColor="#3335CF"
        >
          <Logo src={aero} /> Aeronautical - Product Head
        </ActionButton>
      </div>
      </FlexWrap>

        
      <FlexWrapper>
      <CardWrapper width="70">
             <Logos src={logo} />
               <CardTitle>
            Congratulation .. SURESH
            </CardTitle>
            <Label>You are a Analyst</Label>
    <CardFooter>
    <CardText>
      Following are the recommended CloudKompass Certificate Program For You:
      </CardText>
    <Images src={log} />
    </CardFooter>
  </CardWrapper>


  <CardWrapper width="20">
      <Title>Your Result Document For</Title>
      <Text>
        Aeronautical-Product Head
      </Text>
      <SubmitButton>
            Download
          </SubmitButton>
  </CardWrapper>
  </FlexWrapper>
      </PageWrapper>
  )
}

export default ResultCopy
