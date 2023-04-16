import { ScrollBox } from "./ScrollBox";
import { BoxValueQuestion, ContentQuestion, Header, NumberQuestion, Text, Title, ValueQuestion } from "./styles";

export function Questions(){
  return(
    <>
    <Header>
      <ContentQuestion>
        <Title>Question</Title>
        <NumberQuestion>1</NumberQuestion>
      </ContentQuestion>
      <BoxValueQuestion>
        <ValueQuestion>25</ValueQuestion>
        <Text>pts</Text>
      </BoxValueQuestion>
    </Header>
    <ScrollBox />
    </>
  );
}