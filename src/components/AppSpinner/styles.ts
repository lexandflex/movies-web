import styled from 'styled-components';

export const Spinner = styled.svg<{ size: number }>`
  height: ${(props) => `${props.size * 2}px`};
  width: ${(props) => `${props.size * 2}px`};
  animation: rotate 2s linear infinite;

  & circle {
    stroke: ${(props) => props.theme.colors.accentColor};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, ${(props) => 2 * 3.14 * props.size};
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: ${(props) => 3.14 * props.size}, ${(props) => 2 * 3.14 * props.size};
      stroke-dashoffset: -${(props) => 3.14 * (props.size - 4)};
    }
    100% {
      stroke-dasharray: ${(props) => 3.14 * props.size}, ${(props) => 2 * 3.14 * props.size};
      stroke-dashoffset: -${(props) => 2 * 3.14 * (props.size - 4)};
    }
  }
`;
