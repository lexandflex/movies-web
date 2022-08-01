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

  }
  input {
    ${inputStyles}
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
