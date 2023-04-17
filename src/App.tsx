import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Container, Content, GlobalContainer } from "./components/ContainerGlobal/styles";
import { RouterProvider } from "react-router-dom";
import { MyRoutes } from "./routes";
import { useEffect, useState } from "react";
import { Load } from "./components/Load";
import { AppProvider } from "./contexts";
import { useData } from "./hooks";

export function App() {
  const [loading, setLoading] = useState(false);
  const { data } = useData();
  const pathname = window.location.pathname;

  useEffect(() => {
    if(pathname && pathname === "" || pathname === '/' && data?.initialLoading === true){
      setLoading(true);
    }
    setTimeout(async () => {
      setLoading(false);
    }, 5000);

  },[]);

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
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
      </AppProvider>
    </ThemeProvider>
  )
}