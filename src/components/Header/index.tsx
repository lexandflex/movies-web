import { SearchModal } from '@components/SearchModal';
import { getByTitleAction } from '@store/actions/movies';
import { searchedFilmsSelector } from '@store/selectors';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useWindowDimensions from '../../utils/hooks/useWindowDimensions';
import * as Styled from './styles';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const BIG_SIZE_LOGO_URL = require('@assets/header-text-logo.png');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const SMALL_SIZE_LOGO_URL = require('@assets/header-circle-logo.png');

const SEARCH_PLACEHOLDER = "I'm searching for...";

const DROPDOWN_LINKS = [{ title: 'Logout', link: '/logout', icon: <Styled.DropDownIcon /> }];

const pageNumber = 1;

export const Header = () => {
  const dispatch = useDispatch();
  const [showInput, setShowInput] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const foundFilms = useSelector(searchedFilmsSelector);

  console.log({ foundFilms });

  const { width } = useWindowDimensions();

  const LogoImg = useMemo(() => {
    if (width > 576) {
      return <img src={BIG_SIZE_LOGO_URL} alt="Netflix" height="35" width="112" />;
    }
    return <img src={SMALL_SIZE_LOGO_URL} alt="Netflix" height="45" width="60" />;
  }, [width]);

  const handleSearchClick = () => {
    setShowSearchModal(true);
  };

  const handleCancelSearch = () => {
    setShowSearchModal(false);
  };

  const handleOpenCloseInputTitle = () => {
    setShowInput((prevState) => !prevState);
  };

  useEffect(() => {
    if (width > 576 && showInput === true) {
      setShowInput(false);
    }
  }, [width, showInput]);

  const onSearch = (title: string) => {
    title.length && dispatch(getByTitleAction.request({ title, page: pageNumber }));
  };

  const handleOpenCloseDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const SearchComponent = (
    <Styled.Search>
      <Styled.SearchIcon />
      <input type="text" placeholder={SEARCH_PLACEHOLDER} onClick={handleSearchClick} />
    </Styled.Search>
  );

  return (
    <>
      {showInput && (
        <Styled.MobileSearchContainer>
          <Styled.GoBackIcon onClick={handleOpenCloseInputTitle} />
          {SearchComponent}
        </Styled.MobileSearchContainer>
      )}
      {!showInput && (
        <Styled.Container>
          <Link to="/">{LogoImg}</Link>

          {width > 576 ? (
            SearchComponent
          ) : (
            <Styled.SearchButton>
              <Styled.SearchIcon onClick={handleOpenCloseInputTitle} />
            </Styled.SearchButton>
          )}

          <Styled.Profile>
            <Styled.UserIcon onClick={handleOpenCloseDropdown} />
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
          </Styled.Profile>
        </Styled.Container>
      )}
      {showSearchModal && <SearchModal onClose={handleCancelSearch} handleSearch={onSearch} />}
    </>
  );
};
