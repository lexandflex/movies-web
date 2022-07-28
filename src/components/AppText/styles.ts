import styled from 'styled-components';

export const Text = styled.div<{ fontSize: number }>`
  font-size: ${(props) => props.fontSize}px;
`;
