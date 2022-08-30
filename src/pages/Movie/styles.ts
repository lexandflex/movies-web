import { MdStarOutline } from 'react-icons/md';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MainInfo = styled.div`
  flex: 1;

  margin-right: 1rem;
  margin-bottom: 4rem;

  & h1 + p {
    color: ${(props) => props.theme.colors.altTextColor};
  }

  @media (max-width: 1200px) {
    margin-top: 1rem;
    margin-right: 0;
  }
`;

export const Player = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const RatingStar = styled(MdStarOutline)`
  cursor: pointer;
  opacity: 1;
  font-size: 3rem;
  transition: 0.4s;
  &:hover {
    fill: ${(props) => props.theme.colors.ratingStarColor};
    transform: rotateZ(72deg);
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const FilmInfo = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export const FilmDetails = styled.div`
  flex: 1;
`;

export const Genres = styled.ul`
  flex: 1;
`;
export const Genre = styled.li`
  margin-left: 20px;
  color: ${(props) => props.theme.colors.secondTextColor};
  font-size: 24px;
`;
