import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Button from "./components/Button";
import Header from "./components/Header";

export function App() {

  return (
    <ThemeProvider theme={theme}>
      <h1>Hello world</h1>
    </ThemeProvider>
  )
}