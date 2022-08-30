import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TbSearch } from 'react-icons/tb';
import { FaRegUser } from 'react-icons/fa';
import { IoLogInOutline, IoLogOutOutline } from 'react-icons/io5';
import { DropDownMenuIconCss } from '@styles/dropDownMenu';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 3rem;
  justify-content: space-between;

  @media (max-width: 576px) {
    padding: 0.5rem 1rem;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  opacity: 0.6;
  transition: 0.2s;
  cursor: pointer;
  position: absolute;
  right: calc(70px + 8vw);

  & h2 {
    letter-spacing: 0.6px;
    margin-left: 0.75rem;
    line-height: 24px;
  }

  &:hover {
    opacity: 1;
  }
`;

export const SearchIcon = styled(TbSearch)`
  color: ${(props) => props.theme.colors.thirdTextColor};
  width: 1.5rem;
  height: 1.5rem;
`;

export const UserIcon = styled(FaRegUser)`
  width: 65%;
  height: 65%;
  color: ${(props) => props.theme.colors.secondBackgroundColor};
`;

export const ProfileWrapper = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.thirdTextColor};
  opacity: 0.6;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 576px) {
    right: 1rem;
  }
`;

export const DropDown = styled.div`
  position: absolute;
  top: 4rem;
  right: 0;
  display: flex;
  background: ${(props) => props.theme.colors.backgroundColor};
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

export const LogoutItemIcon = styled(IoLogOutOutline)`
  ${DropDownMenuIconCss};
`;

export const LoginItemIcon = styled(IoLogInOutline)`
  ${DropDownMenuIconCss};
`;

export const DropDownItem = styled(Link)`
  padding: 5px 40px 0px 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => props.theme.colors.secondTextColor};
  border-bottom: none;
  font-size: 1rem;
  text-decoration: none;

  @media (max-width: 576px) {
    font-size: 1.25rem;
  }
`;
