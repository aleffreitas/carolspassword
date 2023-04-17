import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Container, Content, GlobalContainer } from "./components/ContainerGlobal/styles";
import { RouterProvider } from "react-router-dom";
import { MyRoutes } from "./routes";
import { useEffect, useState } from "react";
import { Load } from "./components/Load";

export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  },[]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        {loading ?(
          <Load />
        ):(
          <Content>
            <Header /> 
            <GlobalContainer>
              <MyRoutes />
            </GlobalContainer>
          </Content>
        )}
      </Container>
    </ThemeProvider>
  )
}