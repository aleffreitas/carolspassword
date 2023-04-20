import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { Card, Container, ContainerAvatar, Text, TitleCard } from "./styles";
import { AvatarAnimation } from "../../components/AvatarAnimation";

import "react-responsive-carousel/lib/styles/carousel.min.css"; //
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { ModalBonus } from "./ModalBonus";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";

type AnimationProps = {
  id: number;
  title: string;
  animation: 'dancing' | 'dancingTwo' | 'jump' | 'jumpRun' | 'walking';
}

export function Bonus(){
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {      
      setLoading(false);
    }, 1500);
  },[]);

  const animations: AnimationProps[] = [
    {
      id: 0,
      title: 'Jump',
      animation: 'jump',
    },
    {
      id: 1,
      title: 'Jump & Run',
      animation: 'jumpRun',
    },
    {
      id: 2,
      title: 'Dancing',
      animation: 'dancing',
    },
    {
      id: 3,
      title: 'Dancing Two',
      animation: 'dancingTwo',
    },
    {
      id: 4,
      title: 'Walking',
      animation: 'walking',
    },

  ];
  return(
    <>
      {loading ? (
        <Loading />
      ):(
        <>
          <Container>
            <Text>Bonus</Text>
            <Logo subTitle="Animations" size={12} />
            <Carousel
              width={310}
              showArrows={false}
              showStatus={false}
            >        
              {animations.map((animation) => (
                <Card key={animation.id}>
                  <TitleCard>{animation.title}</TitleCard>
                  <ContainerAvatar>
                    <AvatarAnimation variantAnimation={animation.animation} />
                  </ContainerAvatar>
                </Card>   
              ))}
            </Carousel>

            <Button
              type="button"
              icon="house"
              text="Home"
              variant={1}
              onClick={() => navigate('/')}
            />
          </Container>
          <ModalBonus />
        </>
      )}
    </>
  );
}