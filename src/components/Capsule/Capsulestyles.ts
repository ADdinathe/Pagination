import styled, { css } from 'styled-components';

import { COLORS } from 'config/colors';

export const StyledButton = styled.button<{ color: string }>`
  color: white;
  padding: 1rem 2rem;
  border-radius: 2rem;

  ${({ color }) =>
    color === COLORS.RED
      ? css`
          background: rgb(255, 0, 0);
          background: linear-gradient(
            90deg,
            rgba(255, 0, 0, 1) 48%,
            rgba(255, 0, 0, 1) 48%,
            rgba(255, 255, 255, 1) 49%,
            rgba(255, 0, 0, 1) 50%,
            rgba(255, 0, 0, 1) 50%
          );
        `
      : css`
          background: rgb(0, 3, 255);
          background: linear-gradient(
            90deg,
            rgba(0, 3, 255, 1) 48%,
            rgba(0, 3, 255, 1) 48%,
            rgba(255, 255, 255, 1) 49%,
            rgba(0, 3, 255, 1) 50%,
            rgba(0, 3, 255, 1) 50%
          );
        `};
`;
