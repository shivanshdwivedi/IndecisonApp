// jshint esversion :6

import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
    isOpen = {!!props.selectedOption}
    onRequestClose = {props.handleClearState}
    contentLabel = "Selected Option"
    closeTimeoutMS={200}
    className='modal'
    >
    <div>
        <h3 className = 'modal__title'>Selected Option</h3>
        {props.selectedOption && <p className = 'modal__body'>{props.selectedOption}</p>}
        <button className = 'button' onClick = 
              {props.handleClearState}
        >
        Okay
        </button>
    </div>

    </Modal>
);

export default OptionModal;