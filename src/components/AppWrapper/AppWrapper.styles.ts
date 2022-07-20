import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: ${(props) => props.theme.colors.secondBackgroundColor};
  width: 100%;
  display: flex;
  height: 300px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.backgroundColor}; ;
`;
