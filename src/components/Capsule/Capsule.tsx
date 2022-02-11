import * as React from 'react';

import { PanelEnum } from 'config/routes';
import { useVKHistory } from 'utils/router';

import { StyledButton } from './Capsulestyles';

export interface Props {
  children: React.ReactNode;
  destination?: PanelEnum;
  color: string;
  onClick: () => void;
}

const RoutingCapsule: React.FC<Props> = ({
  children,
  destination = PanelEnum.main,
  color,
  onClick,
}: Props) => {
  const { push } = useVKHistory();

  return (
    <StyledButton onClick={onClick} color={color}>
      {children}
    </StyledButton>
  );
};

export default React.memo(RoutingCapsule);
