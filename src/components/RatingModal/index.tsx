import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '@components/Modal';
import { addRatingAction } from '@store/actions/movies';
import { Props } from './types';
import * as Styled from './styles';

const RATING_ITEMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const RatingModal: FC<Props> = ({ showModal, onClose, totalVotes, totalRate, filmId }) => {

  const dispatch = useDispatch();

  const handleAddRating = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const ratingItem = +e.currentTarget.innerHTML;
    dispatch(addRatingAction.request({kinopoiskId: filmId, rating: ratingItem}));
  };

  return (
    <Modal
      showModal={showModal}
      onClose={onClose}
      title={`Рейтинг : ${totalRate || 'отсутствует'}`}
      text={`Количество оценок : ${totalVotes}`}
    >
      <Styled.RatingBlock>
        {RATING_ITEMS.map((ratingItem) => (
          <Styled.RatingItem
            key={ratingItem}
            title={`Поставить оценку ${ratingItem}`}
            onClick={handleAddRating}
          >
            {ratingItem}
          </Styled.RatingItem>
        ))}
      </Styled.RatingBlock>
    </Modal>
  );
};
