import { Typography } from '@devlaunchers/components/components/atoms';
import {
  ModalHeader,
  ModalBody,
  userUnboardingModalStyle,
} from './StyledEditProfileModal';
import rocket from '../../../../../../../packages/UI/src/images/logo-monogram.png';
import { useReducer, useContext } from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#__next');

import { EditProfileDataContext } from '../../../../context/EditProfileDataContext';

export default function EditPforileModal() {
  const { editProfileIsOpen, closeModal } = useContext(EditProfileDataContext);

  return (
    <>
      <Modal
        style={userUnboardingModalStyle}
        isOpen={editProfileIsOpen.showEditProfileModal}
      >
        <ModalHeader>
          <img src={rocket} className="rocket-img"></img>
          <Typography type="h4" className="navbar-title">
            Dev Launchers
          </Typography>
          <button className="close-button" onClick={() => closeModal()}>
            ×
          </button>
        </ModalHeader>
        <ModalBody />
      </Modal>
    </>
  );
}
