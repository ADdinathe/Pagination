import * as React from 'react';

import { COLORS } from 'config/colors';
import { PanelEnum } from 'config/routes';
import { useVKHistory } from 'utils/router';

import { DestinationType } from '../types';

import { StyledButton } from './MyButton.styles';

export type ButtonProps = {
  children: React.ReactNode;
  destination: Omit<DestinationType, 'panel'> | Omit<DestinationType, 'modal'>;
};

const RoutingButton: React.FC<ButtonProps> = ({
  children,
  destination = {
    panel: PanelEnum.main,
    state: { color: COLORS.RED, page: PanelEnum.main },
  },
}: ButtonProps) => {
  const { push } = useVKHistory<{ color: COLORS; page: PanelEnum }>();

  const handleClick = React.useCallback(() => {
    push(destination);
  }, [destination]);

  return (
    <StyledButton color={destination?.state?.color} onClick={handleClick}>
      {children}
    </StyledButton>
  );
};

export default React.memo(RoutingButton);
