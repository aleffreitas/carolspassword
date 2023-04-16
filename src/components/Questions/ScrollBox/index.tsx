import { Corner, Root, Scrollbar, Text, Thumb, Viewport } from './styles';

export function ScrollBox(){
  return(

    <Root>
      <Viewport>
        <Text>
          Sou um objeto presente no quarto,<br />
          Sempre exposto, nunca em um recanto,<br />
          Guardo um número, pode estar certa,<br />
          Que representa um momento encantador.<br />
        </Text><br />

        <Text>
          Não me subestime pelo meu tamanho,
          Pois sou muito mais do que parece,
          E dentro de mim esconde-se uma pista,
          De uma data que seu coração conhece.
        </Text><br />

        <Text>
          Não me subestime pelo meu tamanho,
          Pois sou muito mais do que parece,
          E dentro de mim esconde-se uma pista,
          De uma data que seu coração conhece.
        </Text><br />

        <Text>
          Não me subestime pelo meu tamanho,
          Pois sou muito mais do que parece,
          E dentro de mim esconde-se uma pista,
          De uma data que seu coração conhece.
        </Text><br />
          Essa data representa um grande amor,
        
      </Viewport>
      
      <Scrollbar orientation="horizontal">
        <Thumb />
      </Scrollbar>
      <Scrollbar orientation="vertical">
        <Thumb />
      </Scrollbar>
    <Corner />
  </Root>
  );
}