import * as React from 'react';

import { StyledButton } from './Capsulestyles';

export interface Props {
  children: React.ReactNode;
  color: string;
  onClick: () => void;
}

const RoutingCapsule: React.FC<Props> = ({
  children,
  color,
  onClick,
}: Props) => {
  return (
    <StyledButton onClick={onClick} color={color}>
      {children}
    </StyledButton>
  );
};

export default React.memo(RoutingCapsule);
