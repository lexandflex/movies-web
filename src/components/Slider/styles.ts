import styled, { css } from 'styled-components';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

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
  /* background-color: white;
  border-radius: 100%; */
  position: absolute;
  /* opacity: 0.5; */
  cursor: pointer;
  font-size: 2rem;
  z-index: 2;
  color: white;
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

export const SliderCard = styled.div`
  /* width: 250px; */
  width: 19%;
  height: 100%;
  border-radius: 10px;
  display: inline-block;
  padding-right: 0.5%;
  padding-left: 0.5%;

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

export const SlidercardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;