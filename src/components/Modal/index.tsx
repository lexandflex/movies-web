import React, { useRef } from 'react';
import * as Styled from './styles';

export const Modal = ({ showModal, onClose, title = '', text = '', children }: any) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickCloseModalButton = () => {
    onClose(false);
  };

  const handleCloseModal = (event: any) => {
    if (modalRef.current === event.target) {
      onClose(false);
    }
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {showModal && (
        <Styled.Container onClick={handleCloseModal} ref={modalRef}>
          <Styled.ModalWrapper>
            <Styled.ModalContent>
              <Styled.ContentContainer>
                {title && <Styled.Title>{title}</Styled.Title>}
                {text && <Styled.Text>{text}</Styled.Text>}
                {children}
              </Styled.ContentContainer>
            </Styled.ModalContent>
            <Styled.CloseModalButton
              aria-label="Close modal"
              onClick={handleClickCloseModalButton}
            />
          </Styled.ModalWrapper>
        </Styled.Container>
      )}
    </>
  );
};
