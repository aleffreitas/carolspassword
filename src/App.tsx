import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { Dashboard } from "./pages/Dashboard";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Container, Content, GlobalContainer } from "./components/ContainerGlobal/styles";
import { Load } from "./pages/Load";
import { Quiz } from "./pages/Quiz";

export function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Content>
          <Header />
          <GlobalContainer>
            {/* <Dashboard /> */}
            {/* <Load /> */}
            <Quiz />
          </GlobalContainer>
        </Content>
      </Container>
    </ThemeProvider>
  )
}