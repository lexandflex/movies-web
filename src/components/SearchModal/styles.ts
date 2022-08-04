import styled from 'styled-components';

import { GrClose } from 'react-icons/gr';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${(props) => `${props.theme.colors.backgroundColor}E6`};
  z-index: 10;
`;

export const Content = styled.div`
  padding: 40px;
`;

export const Search = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  & input {
    margin-top: 2rem;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

export const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const CloseIcon = styled(GrClose)`
  color: ${(props) => props.theme.colors.secondBackgroundColor};
  background-color: red;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1) rotate(10deg);
    color: ${(props) => props.theme.colors.textColor};
  }

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

export const InputWrapper = styled.div``;
