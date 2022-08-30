import { MdDeleteForever } from 'react-icons/md';
import styled from 'styled-components';

export const RatingBlock = styled.div`
  width: auto;
  max-width: 100%;
  min-height: 60px;
  background: ${(props) => props.theme.colors.secondBackgroundColor};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 0px 3px;
  margin-top: 10%;

  @media (max-width: 992px) {
    max-width: 450px;
    min-height: 50px;
    padding: 0px 7px;
  }
`;

export const RatingItem = styled.div`
  height: 50px;
  max-width: 50px;
  width: 9vw;
  margin: 1px 1px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: all 0.2s;
  user-select: none;
  cursor: pointer;

  background-color: ${({ selectedByYou, theme }: { selectedByYou: boolean; theme: any }) =>
    selectedByYou && theme.colors.accentColor};
  color: ${({ selectedByYou, theme }: { selectedByYou: boolean; theme: any }) =>
    selectedByYou && theme.colors.textColor};
  font-weight: ${({ selectedByYou }: { selectedByYou: boolean }) => selectedByYou && 700};
  font-size: ${({ selectedByYou }: { selectedByYou: boolean }) => selectedByYou && 'large'};

  &:hover {
    background-color: ${(props) => props.theme.colors.accentColor};
    color: ${(props) => props.theme.colors.textColor};
    font-weight: 700;
    font-size: larger;
  }

  @media (max-width: 992px) {
    height: 35px;
    max-width: 35px;
  }
`;

export const NotifyBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 60px;
  border-radius: 16px;
  margin-top: 10%;
  padding: 0 2rem;
  cursor: pointer;

  @media (max-width: 992px) {
    max-width: 450px;
    min-height: 50px;
    padding: 0px 7px;
  }
`;

export const ResetRatingButton = styled(MdDeleteForever)`
  cursor: pointer;
  position: absolute;
  top: 75px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  transition: all 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors.accentColor};
    transform: scaleY(1.2);
  }
`;
