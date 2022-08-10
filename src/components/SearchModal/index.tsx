import React, { FC, useRef } from 'react';
import { Link } from 'react-router-dom';
import { RouteNames } from '@router/routeNames';
import { AppInput } from '@components/AppInput';
import { AppText } from '@components/AppText';
import { highlightMatch } from './highlightMatch';
import { Props } from './types';
import * as Styled from './styles';

export const SearchModal: FC<Props> = ({ onClose, handleSearch, data }) => {

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    handleSearch?.(value);
  };

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.IconWrapper onClick={onClose}>
          <Styled.CloseIcon />
        </Styled.IconWrapper>
        <Styled.Search>
          <AppText text='Поиск' size='xl' color='secondTextColor' tag='h1' />
          <AppInput
            type='search'
            onChange={handleInputChange}
            fontSize={24}
            ref={inputRef}
            focus
          />
        </Styled.Search>
        <Styled.SearchHintBlock>
          <Styled.SearchHintContainer>
            <Styled.SearchResultList>
              {data.length && data.map(({ filmId, nameEn, nameRu, year }) => (
                <Styled.SearchResultItem key={filmId}>
                  <Link to={`${RouteNames.MOVIES}/${filmId}`} onClick={onClose}>
                    <Styled.SearchItemIconWrapper>
                      <Styled.MovieIcon />
                    </Styled.SearchItemIconWrapper>
                    <Styled.SearchItemDescription>
                      {
                        inputRef.current ? (
                          <p>
                            { highlightMatch(inputRef.current?.value, nameRu) }
                          </p>
                        ) : <AppText text={nameRu} />
                      }
                      <AppText text={nameEn} />
                      <AppText text={year} />
                    </Styled.SearchItemDescription>
                  </Link>
                </Styled.SearchResultItem>
              ))}
            </Styled.SearchResultList>
          </Styled.SearchHintContainer>
        </Styled.SearchHintBlock>
      </Styled.Content>
    </Styled.Container>
  );
};
