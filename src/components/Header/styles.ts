import styled from 'styled-components';
import { TbSearch } from 'react-icons/tb';
import { FaRegUser } from 'react-icons/fa';
import { BiArrowBack } from 'react-icons/bi';
import { IoLogOutOutline } from 'react-icons/io5';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 3rem;
  margin-bottom: 6%;

  @media (max-width: 576px) {
    padding: 0.5rem 1rem;
  }
`;

export const MobileSearchContainer = styled(Container)`
  width: 100%;
  padding: 0.5rem 0.5rem;
`;

export const Search = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.colors.thirdTextColor};
  background-color: ${(props) => props.theme.colors.secondBackgroundColor};
  /* opacity: 0.5; */

  input {
    width: 100%;
    background-color: transparent;
    outline: none;
    color: ${(props) => props.theme.colors.thirdTextColor};
    margin-left: 0.5rem;
    border: none;
    &::placeholder {
      color: ${(props) => props.theme.colors.thirdTextColor};
    }
  }

  @media (max-width: 576px) {
    width: 70%;
    margin-left: 0.5rem;
    border-radius: 40px;
    padding: 0.5rem 1rem;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    width: 12rem;
    margin-left: 4rem;
    border-radius: 40px;
    padding: 0.5rem 1rem;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    width: 17rem;
    margin-left: 5rem;
    border-radius: 40px;
    padding: 0.5rem 1rem;
  }

  @media (min-width: 992px) {
    width: 17rem;
    margin-left: 10rem;
    border-radius: 40px;
    padding: 0.5rem 1rem;
  }
`;

export const SearchButton = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.colors.thirdTextColor};
  background-color: ${(props) => props.theme.colors.secondBackgroundColor};
  /* opacity: 0.5; */

  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 50%;
  display: flex;
  align-items: center;

  svg {
    margin: 0 auto;
  }
`;

export const SearchIcon = styled(TbSearch)`
  color: ${(props) => props.theme.colors.thirdTextColor};
`;

export const UserIcon = styled(FaRegUser)`
  width: 65%;
  height: 65%;
  color: ${(props) => props.theme.colors.secondBackgroundColor};
`;

export const GoBackIcon = styled(BiArrowBack)`
  color: ${(props) => props.theme.colors.thirdTextColor};
  /* opacity: 0.5; */
`;

export const Profile = styled.div`
  position: absolute;
  right: 3rem;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.thirdTextColor};
  /* opacity: 0.4; */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 576px) {
    right: 1rem;
  }
`;

export const DropDown = styled.div`
  position: absolute;
  top: 3rem;
  right: 0;
  /* color: ${(props) => props.theme.colors.thirdTextColor}; */

  display: flex;
  background: ${(props) => props.theme.colors.backgroundColor};
  /* background: white; */
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  z-index: 3;

  li {
    list-style-type: none;
  }

  ul {
    margin-left: 0;
    padding-left: 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: -18px;
    right: 6%;
    border: 10px solid;
    border-color: transparent transparent ${(props) => props.theme.colors.backgroundColor}
      transparent;
  }

  @media (max-width: 576px) {
    position: fixed;
    left: 0;
    border-radius: 0;
    width: 100vw;
    height: 100vh;
    margin-top: 1rem;
    box-shadow: none;
    &::before {
      border: none;
    }
  }
`;

// export const DropDownItem = styled.div`
//   margin-top: 0.5rem;
//   text-align: center;

//   &:hover {
//     opacity: 0.7;
//   }
// `;

export const DropDownIcon = styled(IoLogOutOutline)`
  padding-right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  color: ${(props) => props.theme.colors.secondTextColor};

  @media (max-width: 576px) {
    width: 3rem;
    height: 3rem;
  }
`;

export const DropDownItem = styled.a`
  padding: 5px 40px 0px 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.secondTextColor};
  border-bottom: none;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 576px) {
    font-size: 1.25rem;
  }
`;
