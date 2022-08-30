import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigator } from '@services/navigatorService';
import { RouteNames } from '@router/routeNames';
import { getByTitleAction } from '@store/actions/movies';
import { isAuthenticatedSelector, searchedFilmsSelector } from '@store/selectors';
import { logoutAction } from '@store/actions/auth';

import { AppText } from '@components/AppText';
import { SearchModal } from '@components/SearchModal';
import { AppLogo } from '@components/AppLogo';
import useWindowDimensions from '@utils/hooks/useWindowDimensions';
import * as Styled from './styles';
import { DropDownMenu } from './components/DropDownMenu';

const pageNumber = 1;

export const Header = () => {
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const foundFilms = useSelector(searchedFilmsSelector);
  const isAuth = useSelector(isAuthenticatedSelector);

  const { isMobile } = useWindowDimensions();

  const handleSearchClick = () => {
    setShowSearchModal(true);
  };

  const handleCancelSearch = () => {
    setShowSearchModal(false);
  };

  const onSearch = (title: string) => {
    title.length && dispatch(getByTitleAction.request({ title, page: pageNumber }));
  };

  const handleToggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const handleLogout = () => {
    dispatch(logoutAction.request());
  };

  const handleLogin = () => {
    Navigator.push(RouteNames.LOGIN);
  };

  const SearchComponent = (
    <Styled.SearchWrapper onClick={handleSearchClick} title="Поиск">
      <Styled.SearchIcon />
      {!isMobile && <AppText text="Поиск" tag="h2" size="sm" />}
    </Styled.SearchWrapper>
  );

  return (
    <>
      <Styled.Container>
        <AppLogo isMobile={isMobile} />
        {SearchComponent}
        <Styled.ProfileWrapper onClick={handleToggleDropdown}>
          <Styled.UserIcon />
          {showDropdown && (
            <DropDownMenu isAuth={isAuth} handleLogout={handleLogout} handleLogin={handleLogin} />
          )}
        </Styled.ProfileWrapper>
      </Styled.Container>
      {showSearchModal && (
        <SearchModal onClose={handleCancelSearch} handleSearch={onSearch} data={foundFilms} />
      )}
    </>
  );
};
