import styled from 'styled-components';

import bg from 'img/morpheus.jpg';

export const Title = styled.h1`
  color: white;
  font-size: 36px;
`;

export const Background = styled.div`
  position: relative;
  width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${bg}) no-repeat center / cover;
`;
