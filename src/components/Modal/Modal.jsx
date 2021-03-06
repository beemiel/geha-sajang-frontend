import React from 'react';
import styled from 'styled-components';

const Modal = ({ messageDisplay, buttonMessageDisplay, message, yesButtonClickHandler, noButtonClickHandler }) => {
  return (
    <>
      <ModalWrap style={{ display: buttonMessageDisplay }}>
        <ButtonMessage>
          <span>{message}</span>
          <ModalButtonWrap>
            <ModalButton onClick={yesButtonClickHandler}>예</ModalButton>
            <ModalButton onClick={noButtonClickHandler}>아니오</ModalButton>
          </ModalButtonWrap>
        </ButtonMessage>
      </ModalWrap>

      <ModalWrap style={{ display: messageDisplay }}>
        <Message>{message}</Message>
      </ModalWrap>
    </>
  );
};

export default Modal;

const ModalWrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 3;
`;

const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 380px;
  min-height: 180px;
  background: white;
  border-radius: 5px;
  padding: 20px 40px;
  font-family: 'S-CoreDream-5Medium';
  color: ${({ theme }) => theme.color.darkGray};
  font-size: 14px;
  line-height: 25px;
`;

const ButtonMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 380px;
  min-height: 180px;
  background: white;
  border-radius: 5px;
  padding: 20px 40px;
  span {
    font-family: 'S-CoreDream-5Medium';
    color: ${({ theme }) => theme.color.darkGray};
    font-size: 14px;
    line-height: 25px;
  }
`;

const ModalButtonWrap = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 25px;
`;
const ModalButton = styled.button`
  width: 120px;
  height: 35px;
  background: ${({ theme }) => theme.color.point};
  border-radius: 3px;
  color: white;
  font-family: 'Eoe_Zno_L';
  color: white;
  font-size: 15px;
  font-weight: bold;
  &:hover {
    background: ${({ theme }) => theme.color.darkPoint};
  }
`;
