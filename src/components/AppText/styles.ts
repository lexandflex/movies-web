import { Theme } from '@utils/themes';
import styled from 'styled-components';

export const Text = styled.div<{ fontSize: number; color: keyof Theme['colors'] }>`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.theme.colors[props.color]};

  &.italic {
    font-style: italic;
    text-decoration: none;
  }
  &.center {
    text-align: center;
  }
  &.mr10 {
    margin-right: 10px;
  }
`;
