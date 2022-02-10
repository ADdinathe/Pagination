import { observer } from 'mobx-react';
import * as React from 'react';

import { PanelEnum } from 'config/routes';

import MyButton from '../../components/MyButton';
import MyLink from '../../components/MyLink';

import styles from './SecondPage.modules.scss';

const Onboarding: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Secondpage</h1>
        <MyButton destination={{ panel: PanelEnum.onboarding }}>
          Go to onboarding
        </MyButton>
        <MyLink destination={{ panel: PanelEnum.main }}>Go to Main page</MyLink>
      </div>
    </>
  );
};

export default observer(Onboarding);
