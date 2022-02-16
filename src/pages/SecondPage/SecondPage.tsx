import { observer } from 'mobx-react';
import * as React from 'react';

import MyButton from 'components/MyButton';
import MyLink from 'components/MyLink/MyLink';
import { COLORS } from 'config/colors';
import { ModalEnum, PanelEnum } from 'config/routes';

import styles from './SecondPage.modules.scss';
import ChoosingModal from './components/ChoosingModal';

const SecondPage: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.Photo_container}>
          <h1 className={styles.title}>SecondPage</h1>
          <MyButton
            destination={{
              modal: ModalEnum.choice,
              state: { color: COLORS.RED, page: PanelEnum.onboarding },
            }}
          >
            Go to onboarding
          </MyButton>

          {/*такая же кнопка только синяя вместо нее теперь ссылка*/}
          {/*<MyButton*/}
          {/*  destination={{*/}
          {/*    modal: ModalEnum.choice,*/}
          {/*    state: { color: COLORS.BLUE, page: PanelEnum.main },*/}
          {/*  }}*/}
          {/*>*/}
          {/*  Go to Main page*/}
          {/*</MyButton>*/}

          <MyLink
            destination={{
              panel: PanelEnum.secondPage,
              modal: ModalEnum.choice,
              state: { color: COLORS.BLUE, page: PanelEnum.main },
            }}
          >
            Go to Main page
          </MyLink>
        </div>
      </div>
      <ChoosingModal />
    </>
  );
};

export default observer(SecondPage);
