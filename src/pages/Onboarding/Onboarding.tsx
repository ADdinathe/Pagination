import * as React from 'react';

import ColoredButtons from 'components/ColoredButtons/ChoiceButtonsWrapper';
import { PanelEnum } from 'config/routes';

import styles from './Onboarding.modules.scss';

const Onboarding: React.FC = () => (
  <div className={styles.container}>
    <ColoredButtons
      redButton={{ panel: PanelEnum.main }}
      blueLink={{
        panel: PanelEnum.secondPage,
      }}
      title={
        PanelEnum.onboarding.charAt(0).toUpperCase() +
        PanelEnum.onboarding.slice(1)
      }
    />
  </div>
);

export default React.memo(Onboarding);
