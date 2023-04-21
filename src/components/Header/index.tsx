import { useEffect, useState } from "react";
import { useData } from "../../hooks";
import { Logo } from "../Logo";
import { Avatar } from "./Avatar";
import { BoxValueQuestion, Container, ContentLogo, Text, ValueQuestion } from "./styles";

export function Header(){
  const [ dataScore, setDataScore ] = useState(0);
  const [ withScore, setWithScore ] = useState(false);
  const { data } = useData();

  useEffect(() => {
    const url = window?.location?.pathname;

    if(!(url === '/' || url === '/dashboard')){
      setWithScore(true);
      return;
    }
    setWithScore(false);
  },[window.location.pathname])

  useEffect(() => {
    if(!data) return ;

    if(data?.score){
      setDataScore(data?.score);
    }
  },[data?.score])

  return(
    <Container>
      <ContentLogo onClick={() => window.location.href = '/'}>
        <Logo size={12} subTitle="Password" />
      </ContentLogo>
        {withScore &&(
          <BoxValueQuestion>
            <Text>Score</Text>
            <ValueQuestion>{dataScore}</ValueQuestion>
            <Text>pts</Text>
          </BoxValueQuestion>
        )}
      <Avatar />
    </Container>
  );
}