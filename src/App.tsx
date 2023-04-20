import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Container, Content, GlobalContainer } from "./components/ContainerGlobal/styles";
import { MyRoutes } from "./routes";
import { useEffect, useState } from "react";
import { Load } from "./components/Load";
import { AppProvider } from "./contexts";
import { UserProps } from "./contexts/UserData";

export function App() {
  const [loading, setLoading] = useState(false);
  const pathname = window?.location?.pathname;

  async function getData(){    
    const data: UserProps = await JSON.parse(localStorage?.getItem("userData") ?? 'null');

    if(!data) return;

    if(pathname && pathname === "" || pathname === '/' && data?.initialLoading === true){
      setLoading(true);
    }

    setTimeout(async () => {
      setLoading(false);
    }, 500000);
  }

  useEffect(() => {
    getData();
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