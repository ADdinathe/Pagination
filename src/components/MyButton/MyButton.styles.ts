import styled, { css } from 'styled-components';

import { COLORS } from 'config/colors';

export const StyledButton = styled.button<{ color?: COLORS }>`
  position: absolute;
  top: 73%;
  left: 18%;
  background: red;
  padding: 1rem;
  border-radius: 1rem;
  color: white;
  box-shadow: inset 0 0 2rem rgba(0, 0, 0, 0.3);

  ${({ color = COLORS.RED }) =>
    color === COLORS.RED
      ? css`
          background: red;
        `
      : css`
          background: blue;
        `}
`;
