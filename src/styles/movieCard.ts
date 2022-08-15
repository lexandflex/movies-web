import { css } from 'styled-components';

export const MovieCardInfoCss = css`
  position: absolute;
  width: 80%;
  bottom: 8%;
  left: 10%;
  z-index: 3;
  opacity: 0;
  transform: translateY(25px);
  transition: 0.5s;

  & h1 {
    white-space: normal;
    line-height: 1.2;
    margin-bottom: 1rem;
    font-size: clamp(18px, 2vw, 42px);
  }

  & p {
    color: ${(props) => props.theme.colors.secondTextColor};
    margin-top: 0.2rem;
    white-space: normal;
    font-size: clamp(12px, 0.9vw, 18px);
  }

  & button {
    margin-top: 10%;
    p {
      color: initial;
    }
  }
`;

export const MovieCardCss = css`
  position: relative;
  transition: 0.4s ease-out;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    display: block;
    border-radius: 10px;
    background-color: black;
    opacity: 0;
    transition: 0.5s;
  }
`;

export const MovieCardImageCss = css`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;
