import { Container, Title } from "./styles";

type LogoProps = {
  size: number;
  subTitle: string;
}; 

export default function Logo({ size, subTitle }: LogoProps){
  return(
    <Container size={size}>
      <Title>{`Carol's`}</Title>
      <h1>{subTitle}</h1>
    </Container>
  );
}