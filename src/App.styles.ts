import styled, { createGlobalStyle, css } from 'styled-components';

const inputStyles = css`
  border: none;
  outline: none;
`;

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');
body {
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: DM Sans, sans-serif;
  }
}
input[type=text], input[type=password] {
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

// @keyframes App-logo-spin {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// }
