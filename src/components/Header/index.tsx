import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getByTitleAction } from '@store/actions/movies';
import { searchedFilmsSelector } from '@store/selectors';
import { logoutAction } from '@store/actions/auth';
import { AppText } from '@components/AppText';
import { SearchModal } from '@components/SearchModal';
import { AppLogo } from '@components/AppLogo';
import useWindowDimensions from '@utils/hooks/useWindowDimensions';
import * as Styled from './styles';

const DROPDOWN_LINKS = [{ title: 'Logout', link: '/logout', icon: <Styled.DropDownItemIcon /> }];

const pageNumber = 1;

export const Header = () => {
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const foundFilms = useSelector(searchedFilmsSelector);

  const { width } = useWindowDimensions();

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

  const SearchComponent = (
    <Styled.SearchWrapper onClick={handleSearchClick} title='Поиск'>
      <Styled.SearchIcon />
      {width > 576 && <AppText text='Поиск' tag='h2' size='sm' />}
    </Styled.SearchWrapper>
  );

  return (
    <>
      <Styled.Container>
        <AppLogo windowWidth={width} />
        {SearchComponent}
        <Styled.ProfileWrapper onClick={handleToggleDropdown}>
          <Styled.UserIcon />
          {showDropdown && (
            <Styled.DropDown>
              <ul>
                {DROPDOWN_LINKS.map((dropdownLink) => (
                  <Styled.DropDownItem key={dropdownLink.link} onClick={handleLogout}>
                    {dropdownLink.icon}
                    <p>{dropdownLink.title}</p>
                  </Styled.DropDownItem>
                ))}
              </ul>
            </Styled.DropDown>
          )}
        </Styled.ProfileWrapper>
      </Styled.Container>
      {showSearchModal && (
        <SearchModal onClose={handleCancelSearch} handleSearch={onSearch} data={foundFilms} />
      )}
    </>
  );
};
