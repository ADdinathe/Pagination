import { observer } from 'mobx-react';
import * as React from 'react';

import ColoredButtons from 'components/ColoredButtons';
import { PanelEnum } from 'config/routes';

import styles from './Main.modules.scss';

const Main: React.FC = () => (
  <div className={styles.container}>
    <ColoredButtons
      redButton={{ panel: PanelEnum.secondPage }}
      blueLink={{
        panel: PanelEnum.onboarding,
      }}
      title={PanelEnum.main.charAt(0).toUpperCase() + PanelEnum.main.slice(1)}
    />
  </div>
);

export default observer(Main);
