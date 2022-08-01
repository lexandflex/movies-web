import { RouteNames } from '@router/routeNames';
import { Navigator } from '@services/navigatorService';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../components/Modal';
import { Slider } from '../../components/Slider';
import { getTopAction } from '../../store/actions/movies';
import { State } from '../../store/reducers';
import * as Styled from './styles';

const RATING_ITEMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const Main: FC = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const movies = useSelector((state: State) => state.movies.topFilms);

  const handleSlideClick = (id: string) => {
    Navigator.push(`${RouteNames.MOVIES}/${id}`);
  };

  const slides = useMemo(
    () =>
      movies.films.map((film) => ({ id: `${film.filmId}`, image: film.posterUrlPreview || '' })),
    [movies],
  );

  useEffect(() => {
    dispatch(getTopAction.request({ page }));
  }, [dispatch, page]);

  const [showModal, setShowModal] = useState(false);

  const handleShowModel = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Slider slides={slides} onClick={handleSlideClick} />
      <button type="button" onClick={handleShowModel}>
        Modal
      </button>
      <Modal showModal={showModal} onClose={setShowModal} title="Rating" text="Rate the movie">
        <Styled.RatingBlock>
          {RATING_ITEMS.map((ratingItem) => (
            <Styled.RatingItem key={ratingItem}>{ratingItem}</Styled.RatingItem>
          ))}
        </Styled.RatingBlock>
      </Modal>
    </>
  );
};
