import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './styles';
import { AppFormProps } from './types';

export const AppForm: FC<AppFormProps> = ({ title = '', onSubmit, link, children }) => (
  <Styled.Wrapper>
    <Styled.Content>
      {title && <Styled.Title>{title}</Styled.Title>}
      <Styled.Form onSubmit={onSubmit}>{children}</Styled.Form>
      {link && (
        <Styled.BottomFormLink>
          {link.text} <Link to={link.link}>{link.title}</Link>
        </Styled.BottomFormLink>
      )}
    </Styled.Content>
  </Styled.Wrapper>
);
