import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '@components/Modal';
import { isAuthenticatedSelector } from '@store/selectors';
import { addRatingAction, removeRatingAction } from '@store/actions/movies';
import { Navigator } from '@services/navigatorService';
import { RouteNames } from '@router/routeNames';
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
    const ratingItemValue = +e.currentTarget.innerHTML;
    dispatch(addRatingAction.request({ kinopoiskId: filmId, rating: ratingItemValue }));
  };

  const handleResetRatingButton = () => {
    dispatch(removeRatingAction.request({ kinopoiskId: filmId }));
  };

  const handleAuth = () => {
    console.log('here');
    Navigator.push(RouteNames.LOGIN);
  };

  const isAuth = useSelector(isAuthenticatedSelector);
  console.log('isAuth: ', isAuth);

  return (
    <Modal
      showModal={showModal}
      onClose={onClose}
      title={`Рейтинг : ${
        totalRate && totalVotes ? (totalRate / totalVotes).toFixed(2) : 'отсутствует'
      }`}
      text={`Количество оценок : ${totalVotes || 0}`}
    >
      <>
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
            <Styled.NotifyBlock onClick={handleAuth}>
              Авторизуйтесь, чтобы оценить фильм
            </Styled.NotifyBlock>
          )}
        </Styled.RatingBlock>
        {isAuth && (
          <Styled.ResetRatingButton
            aria-label="Reset personal rating"
            onClick={handleResetRatingButton}
            title="Сбросить свою оценку"
          />
        )}
      </>
    </Modal>
  );
};
