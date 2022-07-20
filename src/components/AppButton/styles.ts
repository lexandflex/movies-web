import styled from 'styled-components';
import { Theme } from '../../utils/themes';

export const ButtonContainer = styled.button<{ themeColor: keyof Theme['colors'] }>`
  border: none;
  border-radius: 8px;
  padding: 10;
  background-color: ${(props) => props.theme.colors[props.themeColor]};
  cursor: pointer;
  width: 100%;
  transition: 0.17s;

  &:hover {
    opacity: 0.9;
  }
`;

export const ButtonText = styled.p`
  font-weight: bold;
`;
