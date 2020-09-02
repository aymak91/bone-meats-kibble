import React from 'react'
import { connect } from 'react-redux'
import { closeModal } from '../../actions/modal_actions'

import UpdateDogFormContainer from "../profile/update_dog_form_container";

const Modal = ({modal, closeModal}) => {
    if(!modal) {
        return null;
    }
    let component;
    switch (modal.modal) {
        case 'Update Dog Form':
            component = <UpdateDogFormContainer/>;
            break;
        default: null;
    }
    return (
      <div className="modal-background" onClick={() => closeModal()}>
        <div className="modal-child" onClick={(e) => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
}
const msp = (state) => {
  return {
    modal: state.modal,
  };
};
const mdp = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};
export default connect(msp, mdp)(Modal);