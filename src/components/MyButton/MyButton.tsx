import { Button } from '@vkontakte/vkui';
import * as React from 'react';

import { PanelEnum } from '../../config/routes';
import { useVKHistory } from '../../utils/router';

import styles from './MyButton.modules.scss';

interface Props {
  children: React.ReactNode;
  destination: { panel: PanelEnum };
}

const MyButton: React.FC<Props> = ({
  children,
  destination = { panel: PanelEnum.main },
}: Props) => {
  const { push } = useVKHistory();
  return (
    <Button className={styles.button} onClick={() => push(destination)}>
      {children}
    </Button>
  );
};

export default React.memo(MyButton);
