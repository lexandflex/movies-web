import styled from 'styled-components';
import { TbSearch } from 'react-icons/tb';
import { FaRegUser } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 3rem;
`;

export const Search = styled.div`
  /* width: 17rem; */
  display: flex;
  /* margin-left: 10rem; */
  /* border-radius: 40px; */
  border: 1px solid ${(props) => props.theme.colors.thirdTextColor};
  background-color: ${(props) => props.theme.colors.secondBackgroundColor};
  opacity: 0.5;
  /* padding: 0.5rem 1rem; */

  input {
    background-color: transparent;
    outline: none;
    color: ${(props) => props.theme.colors.thirdTextColor};
    /* margin-left: 0.5rem; */
    border: none;
    &::placeholder {
      color: ${(props) => props.theme.colors.thirdTextColor};
    }
  }

  @media (max-width: 576px) {
    width: 0;
    border: none;
    margin-left: 1rem;
    border-radius: 40px;
    padding: 0.5rem 1rem;

    input {
      margin-left: 0.5rem;
      width: 0;
    }
  }

  @media (min-width: 576px) and (max-width: 768px) {
    width: 12rem;
    margin-left: 4rem;
    border-radius: 40px;
    padding: 0.5rem 1rem;

    input {
      margin-left: 0.5rem;
    }
  }

  @media (min-width: 768px) and (max-width: 992px) {
    width: 17rem;
    margin-left: 5rem;
    border-radius: 40px;
    padding: 0.5rem 1rem;

    input {
      margin-left: 0.5rem;
    }
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    width: 17rem;
    margin-left: 10rem;
    border-radius: 40px;
    padding: 0.5rem 1rem;

    input {
      margin-left: 0.5rem;
    }
  }

  @media (min-width: 1200) {
    width: 17rem;
    margin-left: 10rem;
    border-radius: 40px;
    padding: 0.5rem 1rem;

    input {
      margin-left: 0.5rem;
    }
  }
`;

export const Icon = styled(TbSearch)`
  color: ${(props) => props.theme.colors.thirdTextColor};
`;

export const Profile = styled.div`
  position: absolute;
  right: 3rem;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.thirdTextColor};
  opacity: 0.4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserIcon = styled(FaRegUser)`
  width: 65%;
  height: 65%;
  color: ${(props) => props.theme.colors.secondBackgroundColor};
`;
