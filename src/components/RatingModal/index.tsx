import React from 'react';
import { Modal } from '../Modal';
import * as Styled from './styles';

const RATING_ITEMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const RatingModal = ({ showModal, onClose }: any) => (
  <Modal showModal={showModal} onClose={onClose} title="Rating" text="Rate the movie">
    <Styled.RatingBlock>
      {RATING_ITEMS.map((ratingItem) => (
        <Styled.RatingItem key={ratingItem}>{ratingItem}</Styled.RatingItem>
      ))}
    </Styled.RatingBlock>
  </Modal>
);
