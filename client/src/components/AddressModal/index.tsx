import Modal from '@components/Modal/index';
import Searchbar from '@components/Searchbar/index';
import {
  TitleWrapper,
  ButtonWrapper,
  SubmitButton,
  ModalSizer,
} from '@components/AddressModal/index.style';

import React, { useState } from 'react';

interface AddressModalProps {
  title: string;
  onSubmitHandler;
  onCancelHandler;
  toggleModal?: () => void;
}

const AddressModal: React.FC<AddressModalProps> = ({
  title,
  onSubmitHandler,
  onCancelHandler,
  toggleModal,
}) => {
  const [mapInfo, setMapInfo] = useState({});

  const onClickHandler = (mapInfo: MapInfo) => {
    setMapInfo(mapInfo);
  };

  return (
    <Modal toggleModal={toggleModal}>
      <ModalSizer>
        <TitleWrapper>{title}</TitleWrapper>
        <Searchbar onClickHandler={onClickHandler} />
      </ModalSizer>
      <ButtonWrapper>
        <SubmitButton cancel={false} onClick={() => onSubmitHandler(mapInfo)}>
          제출
        </SubmitButton>
        <SubmitButton cancel={true} onClick={onCancelHandler}>
          취소
        </SubmitButton>
      </ButtonWrapper>
    </Modal>
  );
};

export default AddressModal;