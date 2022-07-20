import React, { FC } from 'react';
import { Header } from '@components/Header';
import { Props } from './types';
import * as Styled from './AppWrapper.styles';

export const AppWrapper: FC<Props> = ({ children }) => (
  <>
    <Header />
    <Styled.ContentWrapper>{children}</Styled.ContentWrapper>
    <Styled.Footer />
  </>
);
