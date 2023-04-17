import { Logo } from "../Logo";
import { Avatar } from "./Avatar";
import { Container, ContentLogo } from "./styles";

export function Header(){

  return(
    <Container>
      <ContentLogo onClick={() => window.location.href = '/dashboard'}>
        <Logo size={12} subTitle="Password" />
      </ContentLogo>
      <Avatar />
    </Container>
  );
}