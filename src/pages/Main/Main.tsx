import { observer } from 'mobx-react';
import * as React from 'react';

import MyButton from 'components/MyButton/MyButton';
import MyLink from 'components/MyLink/MyLink';
import { ModalEnum, PanelEnum } from 'config/routes';

import styles from './Main.modules.scss';

const Main: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Main</h1>
        <MyButton destination={{ panel: PanelEnum.secondPage }}>
          Go to secondPage
        </MyButton>
        <MyLink
          destination={{ panel: PanelEnum.onboarding, modal: ModalEnum.choice }}
        >
          Go to Onboarding
        </MyLink>
      </div>
    </>
  );
};

export default observer(Main);
