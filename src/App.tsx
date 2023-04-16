import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Container, Content, GlobalContainer } from "./components/ContainerGlobal/styles";
import { BrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import { router } from "./routes";
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
              <RouterProvider router={router} />
            </GlobalContainer>
          </Content>
        )}
      </Container>
    </ThemeProvider>
  )
}