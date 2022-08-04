import { AppInput } from '@components/AppInput';
import { AppText } from '@components/AppText';
import React, { FC } from 'react';

import * as Styled from './styles';
import { Props } from './types';

export const SearchModal: FC<Props> = ({ onClose, handleSearch, children }) => {
  console.log('search modal');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch?.(event.target.value);
  };

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.IconWrapper onClick={onClose}>
          <Styled.CloseIcon />
        </Styled.IconWrapper>
        <Styled.Search>
          <AppText text="Поиск" size="xl" color="secondTextColor" tag="h1" />
          <AppInput type='search' onChange={handleInputChange} fontSize={24} />
          <div>{children}</div>
        </Styled.Search>
      </Styled.Content>
    </Styled.Container>
  );
};
