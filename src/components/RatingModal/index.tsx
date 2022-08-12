import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '@components/Modal';
import { Props } from './types';
import * as Styled from './styles';

const RATING_ITEMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // еще props - id, rating, numOfApp

export const RatingModal: FC<Props> = ({ showModal, onClose }) => {
  const dispatch = useDispatch();

  return (
    <Modal
      showModal={showModal}
      onClose={onClose}
      title={`Рейтинг : `}
      text={`Количество оценок : `}
    >
      <Styled.RatingBlock>
        {RATING_ITEMS.map((ratingItem) => (
          <Styled.RatingItem key={ratingItem} title={`Поставить оценку ${ratingItem}`}>
            {ratingItem}
          </Styled.RatingItem>
        ))}
      </Styled.RatingBlock>
    </Modal>
  );
};
