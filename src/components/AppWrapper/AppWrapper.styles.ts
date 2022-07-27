import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: ${(props) => props.theme.colors.secondBackgroundColor};
  width: 100%;
  display: flex;
  min-height: 400px;
`;

export const ContentWrapper = styled.main`
  display: flex;
  flex: 1 1 auto;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.backgroundColor}; ;
`;
