import React, { FC } from 'react';
import * as Styled from '../styles';

interface Props {
  isAuth: boolean;
  handleLogout: () => void;
  handleLogin: () => void;
};

export const DropDownMenu: FC<Props> = ({ isAuth, handleLogout, handleLogin }) => {

  const DROPDOWN_LINKS_USER = [
    { title: 'Выйти', link: '/logout', handleClick: handleLogout, icon: <Styled.LogoutItemIcon /> },
  ];
  
  const DROPDOWN_LINKS_GUEST = [
    { title: 'Войти', link: '/login', handleClick: handleLogin, icon: <Styled.LoginItemIcon /> }
  ];

  const dropDownMenuLinks = (isAuth: boolean) => (
    isAuth ? DROPDOWN_LINKS_USER : DROPDOWN_LINKS_GUEST
  );

  return (
    <Styled.DropDown>
      {dropDownMenuLinks(isAuth).map((dropdownLink) => (
        <Styled.DropDownItem
          to={dropdownLink.link}
          key={dropdownLink.link}
          onClick={dropdownLink.handleClick}
        >
          {dropdownLink.icon}
          <p>{dropdownLink.title}</p>
        </Styled.DropDownItem>
      ))}
    </Styled.DropDown>
  );
};
