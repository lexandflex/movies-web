import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: ${(props) => props.theme.colors.secondBackgroundColor};
  width: 100%;
  display: flex;
  min-height: 400px;
  color: ${(props) => props.theme.colors.textColor};
`;

export const ContentWrapper = styled.main`
  display: flex;
  flex: 1 1 auto;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  color: ${(props) => props.theme.colors.textColor};
`;
