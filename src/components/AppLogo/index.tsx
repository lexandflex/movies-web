import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import BIG_SIZE_LOGO_URL from '@assets/header-text-logo.png';
import SMALL_SIZE_LOGO_URL from '@assets/header-circle-logo.png';
import { AppLogoProps } from './types';
import * as Styled from './styles';

export const AppLogo: FC<AppLogoProps> = ({ windowWidth }) => (
  <Link to='/'>
    <Styled.LogoWrapper>
      {windowWidth && windowWidth > 576
        ? <img src={BIG_SIZE_LOGO_URL} alt='Netflix' height='45' width='120' />
        : <img src={SMALL_SIZE_LOGO_URL} alt='Netflix' height='45' width='60' />}
    </Styled.LogoWrapper>
  </Link>
)
