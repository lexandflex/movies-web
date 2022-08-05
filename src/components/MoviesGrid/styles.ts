import styled from 'styled-components';
import { MdStarOutline } from 'react-icons/md';
import {
  MovieCardCss,
  MovieCardImageCss,
  MovieCardInfoCss,
  MovieIconStarCss,
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
    font-size: clamp(18px, 2vw, 25px);
  }
`;

export const MovieIconStar = styled(MdStarOutline)`
  ${MovieIconStarCss}
`;

export const MovieContainer = styled.div`
  ${MovieCardCss}

  display: flex;
  flex-direction: column;
  margin: 1%;
  max-width: 200px;
  width: 100%;
  cursor: pointer;

  &:hover {
    transform: translateY(-2%);
    &:before {
      opacity: 0.6;
    }
    ${MovieCardInfo}, ${MovieIconStar} {
      opacity: 1;
      transform: translateY(0);
    }
    ${MovieIconStar} {
      transform: rotate(144deg);
    }
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    width: 18%;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    width: 23%;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    width: 30%;
  }

  @media (max-width: 576px) {
    width: 44%;
  }
`;

export const MovieCardImage = styled.img`
  ${MovieCardImageCss}
`;
