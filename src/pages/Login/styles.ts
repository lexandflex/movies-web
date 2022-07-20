import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  width: 350px;
  border: 1px solid;
  padding: 20px;
  border-radius: 8px;
  border-color: ${(props) => props.theme.colors.accentColor};
  background-color: ${(props) => props.theme.colors.secondBackgroundColor};
`;
