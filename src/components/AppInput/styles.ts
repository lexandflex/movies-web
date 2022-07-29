import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ErrorContainer = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: 12px;
  margin: 8px 0;
`;

export const Input = styled.input<{ fontSize: number }>`
  font-size: ${(props) => props.fontSize}px;
  padding: 16px;
  margin: 8px 0;
  border-radius: 8px;
  box-sizing: border-box;
  height: 100%;

  &:focus {
    border: 1px solid;
    border-color: ${(props) => props.theme.colors.accentColor};
    background-color: ${(props) => props.theme.colors.textColor};
  }
`;
