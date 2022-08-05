import React, { FC } from 'react';
import useWindowDimensions from '@utils/hooks/useWindowDimensions';
import { GrFacebook, GrInstagram, GrTwitter, GrYoutube } from 'react-icons/gr';
import { FaTelegramPlane } from 'react-icons/fa';
import { AppLogo } from '@components/AppLogo';
import { AppText } from '@components/AppText';
import * as Styled from './styles';

const SOCIALS = [
  { id: 1, title: 'Facebook', link: 'https://ru-ru.facebook.com/ivi.ru/', icon: <GrFacebook /> },
  { id: 2, title: 'Telegram', link: 'https://t.me/official_iviru', icon: <FaTelegramPlane /> },
  { id: 3, title: 'Instagram', link: 'https://www.instagram.com/kinopoisk/?hl=ru', icon: <GrInstagram /> },
  { id: 4, title: 'Twitter', link: 'https://twitter.com/kinopoiskru', icon: <GrTwitter /> },
  { id: 5, title: 'YouTube', link: 'https://www.youtube.com/c/kinopoisk/videos', icon: <GrYoutube /> },
];

export const Footer: FC = () => {

  const { width } = useWindowDimensions();

  return (
    <Styled.FooterWrapper>
      <Styled.FooterMain>
        <Styled.FooterMainBox>
          <AppLogo windowWidth={width} />
          <Styled.FooterContacts>адрес, телефон, имейл</Styled.FooterContacts>
        </Styled.FooterMainBox>
        <Styled.FooterMainBox>
          <Styled.FooterNavigation>навигация, домой, сервисы, блог, страницы, соцсети, профиль</Styled.FooterNavigation>
        </Styled.FooterMainBox>
        <Styled.FooterMainBox>
          <Styled.FooterAbout>о нас, компания, наша миссия, вакансии, поддержка, контакты</Styled.FooterAbout>
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
