import styled from 'styled-components';

import dismiss from './img/dismiss.svg';

export const ModalWrapper = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 0;
  transition: opacity 300ms linear;
`;

export const ModalBody = styled.div`
  margin: 0 auto;
  position: absolute;
  left: 50%;
  bottom: 4rem;
  transform: translate(-50%, -50%) scale(0.8);
  opacity: 0;
  width: 40%;
  padding: 1.6rem;
  background: #ffffff;
  border-radius: 1.8rem;
  transition: transform 300ms linear, opacity 300ms linear;
  overflow: hidden;

  font-family: 'Gotham', serif;
`;

export const ModalCloseButton = styled.div`
  position: absolute;
  z-index: 100;
  right: 1.2rem;
  top: 1.2rem;
  width: 2.4rem;
  height: 2.4rem;
  background: url(${dismiss}) no-repeat center / contain;
`;
