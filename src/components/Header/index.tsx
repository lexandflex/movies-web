import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Search, Icon, Profile, UserIcon } from './styles';

const SEARCH_PLACEHOLDER = "I'm searching for...";

export const Header = () => (
  <Container>
    <Link to="/">
      <img
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix"
        height="35"
        width="112"
      />
    </Link>
    <Search>
      <Icon />
      <input type="text" placeholder={SEARCH_PLACEHOLDER} />
    </Search>

    <Profile>
      <UserIcon />
    </Profile>
  </Container>
);
