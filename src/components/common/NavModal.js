import React from 'react';
import Modal from '../common/Modal';

const NavModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <Modal
      visible={visible}
      title="포스트 삭제"
      description="포스트를 정말 삭제하시겠습니까?"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default NavModal;
