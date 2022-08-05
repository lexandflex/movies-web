import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getByTitleAction } from '@store/actions/movies';
import { searchedFilmsSelector } from '@store/selectors';
import { Link } from 'react-router-dom';
import { AppText } from '@components/AppText';
import { SearchModal } from '@components/SearchModal';
import useWindowDimensions from '@utils/hooks/useWindowDimensions';
import BIG_SIZE_LOGO_URL from '@assets/header-text-logo.png';
import SMALL_SIZE_LOGO_URL from '@assets/header-circle-logo.png';
import * as Styled from './styles';

const DROPDOWN_LINKS = [{ title: 'Logout', link: '/logout', icon: <Styled.DropDownItemIcon /> }];

const pageNumber = 1;

export const Header = () => {
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const foundFilms = useSelector(searchedFilmsSelector);

  const { width } = useWindowDimensions();

  const LogoImg = useMemo(() => {
    if (width > 576) {
      return <img src={BIG_SIZE_LOGO_URL} alt='Netflix' height='35' width='112' />;
    }
    return <img src={SMALL_SIZE_LOGO_URL} alt='Netflix' height='45' width='60' />;
  }, [width]);

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

  const SearchComponent = (
    <Styled.SearchWrapper onClick={handleSearchClick} title='Поиск'>
      <Styled.SearchIcon />
      {width > 576 && <AppText text='Поиск' tag='h2' size='sm' />}
    </Styled.SearchWrapper>
  );

  return (
    <>
      <Styled.Container>
        <Link to='/'>{LogoImg}</Link>
        {SearchComponent}
        <Styled.ProfileWrapper onClick={handleToggleDropdown}>
          <Styled.UserIcon />
          {showDropdown && (
            <Styled.DropDown>
              <ul>
                {DROPDOWN_LINKS.map((dropdownLink) => (
                  <li key={dropdownLink.link}>
                    <Styled.DropDownItem href={dropdownLink.link}>
                      {dropdownLink.icon}
                      <p>{dropdownLink.title}</p>
                    </Styled.DropDownItem>
                  </li>
                ))}
              </ul>
            </Styled.DropDown>
          )}
        </Styled.ProfileWrapper>
      </Styled.Container>
      {showSearchModal && <SearchModal onClose={handleCancelSearch} handleSearch={onSearch} />}
    </>
  );
};
