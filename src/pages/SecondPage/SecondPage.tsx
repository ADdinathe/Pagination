import { observer } from 'mobx-react';
import * as React from 'react';

import MyButton from 'components/MyButton';
import { COLORS } from 'config/colors';
import { ModalEnum } from 'config/routes';
import { useVKLocation } from 'utils/router';

import styles from './SecondPage.modules.scss';
import ChoosingModal from './components/ChoosingModal';

const SecondPage: React.FC = () => {
  const {
    modal,
    state: { color, page },
  } = useVKLocation<{ color: COLORS; page: string }>();
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>SecondPage</h1>
        <MyButton
          destination={{
            modal: ModalEnum.choice,
            state: { color: COLORS.RED, page: 'Go to onboarding' },
          }}
        >
          Go to onboarding
        </MyButton>
        <MyButton
          destination={{
            modal: ModalEnum.choice,
            state: { color: COLORS.BLUE, page: 'Go to Main page' },
          }}
        >
          Go to Main page
        </MyButton>
      </div>
      {/*строка ниже почему-то не работает не работает*/}
      {/*<ChoosingModal />*/}

      {/*доказательство того что в теории должно работать*/}
      {modal === ModalEnum.choice && (
        <div className={styles.modal}>
          <div className={styles.modal_title}>hi there</div>
        </div>
      )}
    </>
  );
};

export default observer(SecondPage);
