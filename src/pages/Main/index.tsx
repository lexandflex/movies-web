import React, { FC, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Slider } from '../../components/Slider';
import { getTopAction } from '../../store/actions/movies';
import { State } from '../../store/reducers';

export const Main: FC = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const movies = useSelector((state: State) => state.movies.topFilms);

  const slides = useMemo(
    () => movies.films.map((film) => ({ id: film.filmId, image: film.posterUrlPreview || '' })),
    [movies],
  );

  useEffect(() => {
    dispatch(getTopAction.request({ page }));
  }, []);
  return <Slider slides={slides} />;
};
