import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  max-width: 350px;
  width: 95%;
  border: 1px solid;
  padding: 20px;
  border-radius: 8px;
  border-color: ${(props) => props.theme.colors.accentColor};
  background-color: ${(props) => props.theme.colors.secondBackgroundColor};
  align-items: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.textColor};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const BottomFormLink = styled.div`
  padding-top: 10px;
  color: ${(props) => props.theme.colors.textColor};
  font-size: small;
  a {
    color: ${(props) => props.theme.colors.accentColor};
    text-decoration: none;
    padding-left: 5px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
