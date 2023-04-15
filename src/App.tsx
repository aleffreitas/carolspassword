import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { Dashboard } from "./pages/Dashboard";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Container, Content, GlobalContainer } from "./components/ContainerGlobal/styles";

export function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Content>
          <Header />
          <GlobalContainer>
            <Dashboard />
          </GlobalContainer>
        </Content>
      </Container>
    </ThemeProvider>
  )
}