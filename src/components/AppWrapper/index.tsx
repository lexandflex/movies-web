import React, { FC } from 'react';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { Props } from './types';
import * as Styled from './styles';

export const AppWrapper: FC<Props> = ({ children }) => (
  <>
    <Header />
    <Styled.ContentWrapper>{children}</Styled.ContentWrapper>
    <Footer />
  </>
);
