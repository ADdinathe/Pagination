import styled, { css } from 'styled-components';

import { COLORS } from 'config/colors';

export const StyledButton = styled.button<{ color: string }>`
  color: white;
  padding: 1rem 2rem;

  ${({ color }) =>
    color === COLORS.RED
      ? css`
          background: red;
        `
      : css`
          background: blue;
        `};
`;
