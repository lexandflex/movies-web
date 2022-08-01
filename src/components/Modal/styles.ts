import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalWrapper = styled.div`
  max-width: 800px;
  width: 100%;

  max-height: 500px;
  height: 90%;

  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme.colors.backgroundColor};
  color: ${(props) => props.theme.colors.secondTextColor};
  display: grid;
  position: relative;
  z-index: 101;
  border-radius: 10px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.secondTextColor};
`;

export const ContentContainer = styled.div``;

export const Title = styled.h1`
  margin-block-start: 0;
  margin-block-end: 0;
`;

export const Text = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 10px 0px;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
