import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import useWindowDimensions from '@utils/hooks/useWindowDimensions';
import { AppLogo } from '@components/AppLogo';
import { AppText } from '@components/AppText';
import { SOCIALS, CONTACTS, NAV, ABOUT } from './data';
import * as Styled from './styles';

export const Footer: FC = () => {

  const { width } = useWindowDimensions();

  return (
    <Styled.FooterWrapper>
      <Styled.FooterMain>
        <Styled.FooterMainBox>
          <AppLogo windowWidth={width} />
          <Styled.FooterContacts>
            {Object.values(CONTACTS).map((item, i) => <AppText key={+i} text={item} />)}
          </Styled.FooterContacts>
        </Styled.FooterMainBox>
        <Styled.FooterMainBox>
          <Styled.FooterNavigation>
            <AppText text='Навигация' tag='h2' />
            {NAV.map(link => (
              <li key={link.id}>
                <Link to={link.route}>{link.title}</Link>
              </li>
            ))}
          </Styled.FooterNavigation>
        </Styled.FooterMainBox>
        <Styled.FooterMainBox>
          <Styled.FooterNavigation>
            <AppText text='О нас' tag='h2' />
            {ABOUT.map(link => (
              <li key={link.id}>
                <Link to={link.route}>{link.title}</Link>
              </li>
            ))}
          </Styled.FooterNavigation>
        </Styled.FooterMainBox>
      </Styled.FooterMain>

      <Styled.FooterDown>
        <Styled.FooterRights>
          <Styled.CopyRightsIcon />
          <AppText text='Innowise Group 2022' />
        </Styled.FooterRights>
        <Styled.FooterSocials>
          {SOCIALS.map(social => (
            <Styled.SocialsIconWrapper href={social.link} title={social.title} key={social.id}>
              {social.icon}
            </Styled.SocialsIconWrapper>
          ))}
        </Styled.FooterSocials>
      </Styled.FooterDown>
    </Styled.FooterWrapper>
  );
}
