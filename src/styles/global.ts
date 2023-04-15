import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  };

  body {
    ${({ theme }) => css`    
      background-color: ${theme.colors.gray900};    
      color: ${theme.colors.white};
    `}
    -webkit-font-smoothing: 'antialiased';
  };

  body, input, textarea, button {
    font-family: 'Poppins';
    font-weight: 400;
  }
`;