import { Button } from '@vkontakte/vkui';
import * as React from 'react';

import { ModalEnum, PanelEnum } from 'config/routes';
import { useVKHistory } from 'utils/router';

import { COLORS } from '../../config/colors';

import styles from './MyButton.modules.scss';

export interface ButtonProps {
  children: React.ReactNode;
  destination:
    | { panel: PanelEnum; state?: { color: COLORS; page: string } }
    | { modal: ModalEnum; state?: { color: COLORS; page: string } };
}

const RoutingButton: React.FC<ButtonProps> = ({
  children,
  destination = {
    panel: PanelEnum.main,
    state: { color: COLORS.RED, page: 'Main page' },
  },
}: ButtonProps) => {
  const { push } = useVKHistory<{ color: COLORS; page: string }>();
  if (destination?.state?.color === COLORS.BLUE) {
    return (
      <Button
        className={styles.button}
        style={{ left: 1150, background: 'blue' }}
        onClick={() => {
          push(destination);
        }}
      >
        {children}
      </Button>
    );
  }
  return (
    <Button className={styles.button} onClick={() => push(destination)}>
      {children}
    </Button>
  );
};

export default React.memo(RoutingButton);
