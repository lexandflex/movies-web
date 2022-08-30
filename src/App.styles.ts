import styled, { createGlobalStyle, css } from 'styled-components';

const inputStyles = css`
  border: none;
  outline: none;
`;

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    font-family: DM Sans, sans-serif;
    /* font-size: 24px; */
  }
  input {
    ${inputStyles}
  }

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: ${(props) => props.theme.colors.backgroundColor};
}

::-webkit-scrollbar-thumb {
  background: ${(props) => props.theme.colors.thirdBackgroundColor};
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: ${(props) => props.theme.colors.accentColor};
}
`;

export const App = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  min-height: 100vh;
  flex: 1 1;
`;
