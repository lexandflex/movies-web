import styled, { css } from 'styled-components';
import { MdChevronLeft, MdChevronRight, MdStarOutline } from 'react-icons/md';

export const Container = styled.div`
  width: 100%;
  height: 60%;
  max-height: 340px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const SliderContainer = styled.div`
  width: 90%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Slider = styled.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  overflow-x: hidden;
  scrollbar-width: none;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 992px) {
    overflow-x: scroll;
  }
`;

const SliderIcon = css`
  position: absolute;
  opacity: 0.7;
  cursor: pointer;
  font-size: 2rem;
  z-index: 2;
  color: white;
  transition: 0.2s;
  &:hover {
    opacity: 1;
  }

  @media (max-width: 992px) {
    font-size: 0;
  }
`;

export const SliderIconLeft = styled(MdChevronLeft)`
  ${SliderIcon}
  left: 2%;

  @media (max-width: 768px) {
    left: -10px;
  }
`;

export const SliderIconRight = styled(MdChevronRight)`
  ${SliderIcon}
  right: 2%;

  @media (max-width: 768px) {
    right: -10px;
  }
`;

export const SliderCardInfo = styled.div`
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

export const SliderIconStar = styled(MdStarOutline)`
  cursor: pointer;
  position: absolute;
  right: 7%;
  top: 3%;
  opacity: 0;
  font-size: 2rem;
  z-index: 3;
  transform: translateX(50%);
  transition: 0.5s;

  &:hover {
    fill: ${(props) => props.theme.colors.ratingStarColor};
  }

  @media (max-width: 992px) {
    font-size: 1rem;
  }
`;

export const SliderCard = styled.div`
  width: 19%;
  height: 100%;
  border-radius: 10px;
  position: relative;
  display: inline-block;
  padding-right: 0.5%;
  padding-left: 0.5%;
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

  &:hover {
    transform: translateY(-2%);
    &:before {
      opacity: 0.6;
    }
    ${SliderCardInfo}, ${SliderIconStar} {
      opacity: 1;
      transform: translateY(0);
    }
    ${SliderIconStar} {
      transform: rotate(144deg);
    }
  }

  @media (min-width: 768px) and (max-width: 992px) {
    width: 24%;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    width: 32.3%;
  }

  @media (max-width: 576px) {
    width: 49%;
  }
`;

export const SliderCardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;
