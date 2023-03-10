import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ConfirmationModal = ({text, handleConfirm, show, handleClose}) => {
 const handleYes = () =>{
  handleConfirm()
  handleClose()
 }
 
  return (
    <>
      <Modal show={show} onHide={handleClose} data-testid="confirmation-modal">
        <Modal.Header closeButton>
          <Modal.Title>Remove from cart</Modal.Title>
        </Modal.Header>
        <Modal.Body data-testid="modal-body">{text}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} data-testid="handle-close">
            Close
          </Button>
          <Button variant="primary" onClick={handleYes}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmationModal