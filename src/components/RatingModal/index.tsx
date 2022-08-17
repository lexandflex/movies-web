import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '@components/Modal';
import { isAuthenticatedSelector } from '@store/selectors';
import { addRatingAction } from '@store/actions/movies';
import { Props } from './types';
import * as Styled from './styles';

const RATING_ITEMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const RatingModal: FC<Props> = ({
  showModal,
  onClose,
  totalVotes,
  totalRate,
  yourRating,
  filmId,
}) => {
  const dispatch = useDispatch();

  const handleAddRating = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const ratingItem = +e.currentTarget.innerHTML;
    dispatch(addRatingAction.request({ kinopoiskId: filmId, rating: ratingItem }));
  };

  const isAuth = useSelector(isAuthenticatedSelector);
  console.log('isAuth: ', isAuth);

  return (
    <Modal
      showModal={showModal}
      onClose={onClose}
      title={`Рейтинг : ${totalVotes !== 0 ? (totalRate / totalVotes).toFixed(2) : 'отсутствует'}`}
      text={`Количество оценок : ${totalVotes}`}
    >
      <Styled.RatingBlock>
        {isAuth ? (
          RATING_ITEMS.map((ratingItem) => (
            <Styled.RatingItem
              key={ratingItem}
              title={`Поставить оценку ${ratingItem}`}
              onClick={handleAddRating}
              selectedByYou={ratingItem === yourRating}
            >
              {ratingItem}
            </Styled.RatingItem>
          ))
        ) : (
          <Styled.NotifyBlock>Авторизуйтесь, чтобы оценить фильм</Styled.NotifyBlock>
        )}
      </Styled.RatingBlock>
    </Modal>
  );
};
