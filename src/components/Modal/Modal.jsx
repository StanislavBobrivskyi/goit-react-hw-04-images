import React, { useEffect, useCallback } from 'react';
import ReactModal from 'react-modal';
import { StyledModal, Overlay } from './modal.styled';

ReactModal.setAppElement('#root');

export const Modal = ({ isOpen, onClose, largeImageUrl }) => {
  const handleKeyDown = useCallback(
    event => {
      if (event.code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <StyledModal>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        className="modal"
        overlayClassName="overlay"
      >
        <Overlay onClick={onClose}>
          <img src={largeImageUrl} alt="" />
        </Overlay>
      </ReactModal>
    </StyledModal>
  );
};
