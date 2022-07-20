import React, { FC } from 'react';
import { AppButtonProps } from './types';
import * as Styled from './styles';

export const AppButton: FC<AppButtonProps> = ({
  title,
  themeColor = 'accentColor',
  children,
  ...props
}) => (
  <Styled.ButtonContainer themeColor={themeColor} {...props}>
    {title ? <Styled.ButtonText>{title}</Styled.ButtonText> : children}
  </Styled.ButtonContainer>
);
