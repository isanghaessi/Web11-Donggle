import xIcon from '@assets/icons/x.svg';
import React from 'react';
import isEqual from 'react-fast-compare';

import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: visible;

  z-index: 3000;
`;

const ModalWrapper = styled.div`
  position: fixed;
  width: 500px;
  height: fit-content;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${(props) => props.theme.common.flexColumn};
  justify-content: space-between;

  padding: 20px;
  box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1),
    0px 0px 4px rgba(51, 51, 51, 0.05);
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.white};

  z-index: 3000;
`;

const ModalCloseBtnDiv = React.memo(
  styled.div`
    ${(props) => props.theme.common.flexRow};
    justify-content: flex-end;
    width: 100%;
  `,
  isEqual,
);

const CrossImage = styled.img`
  width: 100%;
  height: 100%;
`;
CrossImage.defaultProps = { src: xIcon };
const ModalCloseImage = React.memo(CrossImage);

const ModalCloseBtn = React.memo(
  styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
  `,
  isEqual,
);

const ChildrenWrapper = styled.div`
  position: relative;
  margin: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: visible;
`;

export {
  ModalOverlay,
  ModalWrapper,
  ModalCloseBtnDiv,
  ModalCloseImage,
  ModalCloseBtn,
  ChildrenWrapper,
};
