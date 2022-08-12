import styled from 'styled-components';
import { MdLocalMovies } from 'react-icons/md';
import { GrClose } from 'react-icons/gr';

export const Container = styled.div`
  position: fixed;
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

export const SearchHintBlock = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 300px;
`;

export const SearchHintContainer = styled.div`
  margin-left: 40px;
  margin-right: 40px;
`;

export const SearchResultList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const SearchItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  
  & p {
    color: ${(props) => props.theme.colors.secondTextColor};
  }

  & p:nth-child(1) {
    font-weight: bolder;
    letter-spacing: 0.5px;

    span {
      color: ${(props) => props.theme.colors.textColor};
      text-shadow: 0 0 5px ${(props) => props.theme.colors.ratingStarColor};
    }
  }

  & p:nth-child(2) {
    color: ${(props) => props.theme.colors.altTextColor};
    font-size: smaller;
    font-style: italic;
    padding: 5px 0;
  }
`;

export const SearchResultItem = styled.div`
  width: 100%;
  max-width: 300px;
  margin-right: 50px;
  margin-bottom: 50px;

  & a {
    display: flex;
    flex-direction: row;
    text-decoration: none;

    &:hover p:not(:last-of-type), &:hover ${SearchItemDescription} span {
      transition: all 0.4s;
      color: ${(props) => props.theme.colors.accentColor};
      text-shadow: none;
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
  background-color: ${(props) => props.theme.colors.accentColor};
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

export const SearchItemIconWrapper = styled.div`
  margin-right: 15px;
`;

export const MovieIcon = styled(MdLocalMovies)`
  color: ${(props) => props.theme.colors.accentColor};
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: transform 0.2s;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

export const InputWrapper = styled.div``;
