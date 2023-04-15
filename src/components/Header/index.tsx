import Avatar from "./Avatar";
import Logo from "./Logo";
import { Container } from "./styles";

export default function Header(){
  return(
    <Container>
      <Logo size={16} subTitle="Password"/>
      <Avatar />
    </Container>
  );
}