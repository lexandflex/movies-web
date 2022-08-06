import React from 'react';
import { GrFacebook, GrInstagram, GrTwitter, GrYoutube } from 'react-icons/gr';
import { FaTelegramPlane } from 'react-icons/fa';

export const SOCIALS = [
  { id: 1, title: 'Facebook', link: 'https://ru-ru.facebook.com/ivi.ru/', icon: <GrFacebook /> },
  { id: 2, title: 'Telegram', link: 'https://t.me/official_iviru', icon: <FaTelegramPlane /> },
  { id: 3, title: 'Instagram', link: 'https://www.instagram.com/kinopoisk/?hl=ru', icon: <GrInstagram /> },
  { id: 4, title: 'Twitter', link: 'https://twitter.com/kinopoiskru', icon: <GrTwitter /> },
  { id: 5, title: 'YouTube', link: 'https://www.youtube.com/c/kinopoisk/videos', icon: <GrYoutube /> },
];

export const CONTACTS = {
  country: 'Беларусь',
  city: 'Витебск',
  address: 'Строителей, 11а',
  number1: '+375 (44) 6X9-45-49',
  number2: '+375 (29) 5X8-12-10',
  email: 'innowise-group@email.com',
};

export const NAV = [
  { id: 1, route: '/#', title: 'домой' },
  { id: 2, route: '/#', title: 'сервисы' },
  { id: 3, route: '/#', title: 'блог' },
  { id: 4, route: '/#', title: 'страницы' },
  { id: 5, route: '/#', title: 'соцсети' },
  { id: 6, route: '/#', title: 'профиль' },
];

export const ABOUT = [
  { id: 1, route: '/#', title: 'компания' },
  { id: 2, route: '/#', title: 'миссия' },
  { id: 3, route: '/#', title: 'вакансии' },
  { id: 4, route: '/#', title: 'поддержка' },
  { id: 5, route: '/#', title: 'сми о нас' },
  { id: 6, route: '/#', title: 'контакты' },
];
