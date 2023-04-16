import { AvatarAnimation } from "../../components/AvatarAnimation";
import { Logo } from "../../components/Logo";
import { Container, Content, IconLoading, TextFooter } from "./styles";
import Loading from '../../assets/images/loading.svg';

export function Load(){
  return(
    <Container>
      <AvatarAnimation variantAnimation="jumpRun" />
      <Content>
        <Logo subTitle="Password" size={18} />
        <IconLoading src={Loading} />
        <TextFooter>by
          <TextFooter withPurple> aleffreittas</TextFooter>
        </TextFooter>
      </Content>
    </Container>
  );
}