import { observer } from 'mobx-react';
import * as React from 'react';

import ColoredButtons from 'components/ColoredButtons';
import { PanelEnum } from 'config/routes';

import styles from './Main.modules.scss';

const Main: React.FC = () => (
  <div className={styles.container}>
    <ColoredButtons
      RedButton={{ panel: PanelEnum.secondPage }}
      BlueLink={{
        panel: PanelEnum.onboarding,
      }}
      CurrentPage={'Main'}
    />
  </div>
);

export default observer(Main);
