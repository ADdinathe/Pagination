import { observer } from 'mobx-react';
import * as React from 'react';

import MyButton from 'components/MyButton/MyButton';
import MyLink from 'components/MyLink/MyLink';
import { PanelEnum } from 'config/routes';

import styles from './Onboarding.modules.scss';

const Onboarding: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Onboarding</h1>
        <MyButton destination={{ panel: PanelEnum.main }}>
          {' '}
          Go to Main page
        </MyButton>
        <MyLink destination={{ panel: PanelEnum.secondPage }}>
          Go to secondPage
        </MyLink>
      </div>
    </>
  );
};

export default observer(Onboarding);
