import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import {
  Container,
  Search,
  SearchIcon,
  Profile,
  UserIcon,
  SearchButton,
  GoBackIcon,
  MobileSearchContainer,
  DropDown,
  DropDownItem,
} from './styles';

const BIG_SIZE_LOGO_URL = 'https://www.freepnglogos.com/uploads/netflix-logo-0.png';
const SMALL_SIZE_LOGO_URL = 'https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png';

const SEARCH_PLACEHOLDER = "I'm searching for...";

const DROPDOWN_LINKS = [{ title: 'Logout', link: '' }];

export const Header = () => {
  const [title, setTitle] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const { width } = useWindowDimensions();

  const LogoImg = useMemo(() => {
    if (width > 576) {
      return <img src={BIG_SIZE_LOGO_URL} alt="Netflix" height="35" width="112" />;
    }
    return <img src={SMALL_SIZE_LOGO_URL} alt="Netflix" height="45" width="60" />;
  }, [width]);

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.currentTarget.value);
  };

  const handleOpenCloseInputTitle = () => {
    setShowInput((prewState) => !prewState);
  };

  useEffect(() => {
    if (width > 576 && showInput === true) {
      setShowInput(false);
    }
  }, [width, showInput]);

  const handleOpenCloseDropdown = () => {
    setShowDropdown((prewState) => !prewState);
  };

  return (
    <>
      {showInput && (
        <MobileSearchContainer>
          <GoBackIcon onClick={handleOpenCloseInputTitle} />
          <Search>
            <SearchIcon />
            <input
              type="text"
              placeholder={SEARCH_PLACEHOLDER}
              value={title}
              onChange={handleChangeTitle}
            />
          </Search>
        </MobileSearchContainer>
      )}
      {!showInput && (
        <Container>
          <Link to="/">{LogoImg}</Link>

          {width > 576 ? (
            <Search>
              <SearchIcon />
              <input
                type="text"
                placeholder={SEARCH_PLACEHOLDER}
                value={title}
                onChange={handleChangeTitle}
              />
            </Search>
          ) : (
            <SearchButton>
              <SearchIcon onClick={handleOpenCloseInputTitle} />
            </SearchButton>
          )}

          <Profile>
            <UserIcon onClick={handleOpenCloseDropdown} />
            {showDropdown && (
              <DropDown>
                {DROPDOWN_LINKS.map((dropdownLink) => (
                  <DropDownItem key={dropdownLink.title} onClick={handleOpenCloseDropdown}>
                    {dropdownLink.title}
                  </DropDownItem>
                ))}
              </DropDown>
            )}
          </Profile>
        </Container>
      )}
    </>
  );
};
