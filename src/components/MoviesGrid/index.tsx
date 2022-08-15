import React, { FC } from 'react';
import { AppButton } from '../AppButton';
import { AppText } from '../AppText';
import * as Styled from './styles';
import { Props } from './types';

export const MoviesGrid: FC<Props> = ({ movies, onClick }) => {
  const handleMovieClick = (id: string) => () => {
    onClick?.(id);
  };

  return (
    <Styled.Container>
      {movies.map((movie) => (
        <Styled.MovieContainer key={movie.id}>
          <Styled.MovieCardImage src={movie.image} alt="logo" />
          <Styled.MovieCardInfo>
            <AppText text={movie.name} tag="h1" />
            <AppText text={movie.countries} />
            <AppText text={movie.year} />
            <AppText text={movie.genres} />
            <AppButton title="Подробнее" onClick={handleMovieClick(movie.id)} />
          </Styled.MovieCardInfo>
        </Styled.MovieContainer>
      ))}
    </Styled.Container>
  );
};
