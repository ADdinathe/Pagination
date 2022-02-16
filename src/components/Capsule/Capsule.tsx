import * as React from 'react';

import { CapsuleButton } from './Capsule.styles';

export type CapsuleProps = {
  children: React.ReactNode;
  color: string;
  onClick: () => void;
};

const Capsule: React.FC<CapsuleProps> = ({
  children,
  color,
  onClick,
}: CapsuleProps) => (
  <CapsuleButton onClick={onClick} $color={color}>
    {children}
  </CapsuleButton>
);

export default React.memo(Capsule);
