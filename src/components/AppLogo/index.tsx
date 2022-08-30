import React, { FC } from 'react';
import LOGO_URL from '@assets/junkieGlasses.png';
import { AppText } from '@components/AppText';
import { Props } from './types';
import * as Styled from './styles';

export const AppLogo: FC<Props> = ({ isMobile = false }) => (
  <Styled.CustomLink to="/">
    <Styled.LogoWrapper>
      <Styled.LogoWithText>
        <AppText
          size={isMobile ? 'md' : 'lg'}
          className={`italic ${isMobile ? 'mr10' : 'mr10'}`}
          text="TVJ"
          color="secondTextColor"
        />
        <img
          src={LOGO_URL}
          alt="JunkieTV"
          height={isMobile ? '25' : '50'}
          width={isMobile ? '50' : '100'}
        />
      </Styled.LogoWithText>
    </Styled.LogoWrapper>
  </Styled.CustomLink>
);
