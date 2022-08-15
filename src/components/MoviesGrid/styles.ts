import styled from 'styled-components';
import {
  MovieCardCss,
  MovieCardImageCss,
  MovieCardInfoCss,
} from '../../styles/movieCard';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3%;
  padding-top: 0;
  justify-content: center;
`;

export const MovieCardInfo = styled.div`
  ${MovieCardInfoCss}

  & h1 {
    font-size: clamp(13px, 2vw, 23px);
  }

  & p {
    font-size: clamp(9px, 0.9vw, 18px);
  }
`;

export const MovieContainer = styled.div`
  ${MovieCardCss}

  display: flex;
  flex-direction: column;
  margin: 1%;
  max-width: 300px;
  width: auto;
  height: 45vh;
  cursor: pointer;

  &:hover {
    transform: translateY(-2%);
    &:before {
      opacity: 0.8;
    }
    ${MovieCardInfo} {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    width: 18%;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    width: 23%;
    max-width: 200px;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    width: 30%;
    max-width: 200px;
  }

  @media (max-width: 576px) {
    width: 44%;
    max-width: 200px;
  }
`;

export const MovieCardImage = styled.img`
  ${MovieCardImageCss}
`;
