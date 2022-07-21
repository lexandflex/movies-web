import styled, { css } from 'styled-components';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export const Container = styled.div`
  width: 100%;
  height: 60%;
  max-height: 330px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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
  overflow-x: scroll;
  scrollbar-width: none;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SliderIcon = css`
  background-color: white;
  border-radius: 100%;
  position: absolute;
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const SliderIconLeft = styled(MdChevronLeft)`
  ${SliderIcon}
  left: 0;
`;

export const SliderIconRight = styled(MdChevronRight)`
  ${SliderIcon}
  right: 0;
`;

export const SliderCard = styled.div`
  width: 250px;
  height: 300px;
  background: white;
  border-radius: 10px;
  display: inline-block;
  margin-right: 5px;
  margin-left: 5px;
`;

export const SlidercardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
