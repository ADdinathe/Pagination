import { observer } from 'mobx-react';
import * as React from 'react';

import { PanelEnum } from 'config/routes';

import ColoredButtons from '../../components/ColoredButtons/ColoredButtons';

import styles from './Onboarding.modules.scss';

const Onboarding: React.FC = () => (
  <div className={styles.container}>
    <ColoredButtons
      RedButton={{ panel: PanelEnum.main }}
      BlueLink={{
        panel: PanelEnum.secondPage,
      }}
      CurrentPage={'Onboarding'}
    />
  </div>
);

export default observer(Onboarding);
